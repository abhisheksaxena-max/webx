const {
  createUserRegistration,
  createZoomParticipant,
  getMergedWebinarData,
} = require("../dao/userDao");
const axios = require("axios");

const zoomConnect = (req, res) => {
  const authUrl = `https://zoom.us/oauth/authorize?response_type=code&client_id=${
    process.env.ZOOM_CLIENT_ID
  }&redirect_uri=${encodeURIComponent(process.env.ZOOM_REDIRECT_URL)}`;
  res.redirect(authUrl);
};

const zoomCallback = async (req, res) => {
  console.log(req.query);

  const code = req.query.code;
  if (!code) return res.send("No code received from Zoom");

  try {
    const tokenResponse = await axios.post(
      "https://zoom.us/oauth/token",
      null,
      {
        params: {
          grant_type: "authorization_code",
          code: code,
          redirect_uri: process.env.ZOOM_REDIRECT_URL,
        },
        auth: {
          username: process.env.ZOOM_CLIENT_ID,
          password: process.env.ZOOM_CLIENT_SECRET,
        },
      }
    );

    const zoomAccessToken = tokenResponse.data.access_token;
    const zoomRefreshToken = tokenResponse.data.refresh_token;

    console.log(tokenResponse);

    res.json({
      accessToken: zoomAccessToken,
      refreshToken: zoomRefreshToken,
      message:
        "Zoom connected successfully! Access token stored in memory. You can now call /get-webinar or other API routes.",
    });
  } catch (err) {
    console.error(err.response?.data);
    res.status(500).send("Failed to get access token");
  }
};

const zoomRefresh = async (req, res) => {
  const { zoomRefreshToken } = req.body;

  if (!zoomRefreshToken) return res.send("No refresh token available");

  try {
    const tokenResponse = await axios.post(
      "https://zoom.us/oauth/token",
      null,
      {
        params: {
          grant_type: "refresh_token",
          refresh_token: zoomRefreshToken,
        },
        auth: {
          username: process.env.ZOOM_CLIENT_ID,
          password: process.env.ZOOM_CLIENT_SECRET,
        },
      }
    );

    zoomAccessToken = tokenResponse.data.access_token;
    zoomRefreshToken = tokenResponse.data.refresh_token;
    console.log(zoomAccessToken);

    res.json({
      accessToken: zoomAccessToken,
      refreshToken: zoomRefreshToken,
      message: "Zoom access token refreshed successfully!",
    });
  } catch (err) {
    console.error(err.response?.data);
    res.status(500).send("Failed to refresh access token");
  }
};

const zoomRegisterWebinar = async (req, res) => {
  try {
    const { email, first_name, last_name, phone_number, webinarId } = req.body;
    if (!webinarId) {
      return res.status(400).json({ error: "webinarId is required" });
    }
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Zoom token missing in headers" });
    }

    // Send to Zoom
    const zoomRes = await axios.post(
      `https://api.zoom.us/v2/webinars/${webinarId}/registrants`,
      {
        email,
        first_name,
        last_name,
      },
      {
        headers: { Authorization: authHeader },
      }
    );

    const data = zoomRes.data;
    console.log("Zoom response: ", data);

    const {
      registrant_id,
      id, // webinar id
      topic,
      start_time,
      join_url,
    } = data;

    const registerUser = await createUserRegistration(
      email,
      first_name,
      last_name,
      phone_number,
      String(id),
      registrant_id,
      topic,
      start_time,
      join_url
    );

    res.json(registerUser);
  } catch (error) {
    console.error(error.response?.data || error);
    res.status(500).send("Failed to register user");
  }
};

const zoomParticipants = async (req, res) => {
  try {
    const { webinarId } = req.body;

    if (!webinarId) {
      return res.status(400).json({ error: "webinarId is required" });
    }

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Zoom token missing in headers" });
    }

    // Fetch participants from Zoom
    const zoomRes = await axios.get(
      `https://api.zoom.us/v2/report/webinars/${webinarId}/participants`,
      {
        headers: {
          Authorization: authHeader,
        },
      }
    );

    const participants = zoomRes.data.participants;

    const registerParticipants = [];
    for (const p of participants) {
      const register = await createZoomParticipant(
        webinarId,
        p.id,
        p.user_id,
        p.name,
        p.user_email,
        p.join_time,
        p.leave_time,
        p.duration,
        p.status
      );
      registerParticipants.push(register);
    }

    res.json({
      success: true,
      registerParticipants,
    });
  } catch (error) {
    console.log(error.response?.data || error);
    return res.status(500).json({ error: "Failed to fetch/save participants" });
  }
};

const zoomMergedReport = async (req, res) => {
  try {
    const data = await getMergedWebinarData();
    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    console.log("API Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  zoomConnect,
  zoomCallback,
  zoomRefresh,
  zoomRegisterWebinar,
  zoomParticipants,
  zoomMergedReport,
};
