const {
  createUserRegistration,
  createZoomParticipant,
  getMergedWebinarData,
  fetchToken,
  saveToken,
} = require("../dao/userDao");
const axios = require("axios");

const zoomConnect = (req, res) => {
  const authUrl = `https://zoom.us/oauth/authorize?response_type=code&client_id=${
    process.env.ZOOM_CLIENT_ID
  }&redirect_uri=${encodeURIComponent(process.env.ZOOM_REDIRECT_URL)}`;
  res.redirect(authUrl);
};

const zoomCallback = async (req, res) => {
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
  const refresh_token = await fetchToken();

  if (!refresh_token) {
    return res
      .status(400)
      .json({ message: "No refresh token is fetched from DB" });
  }

  try {
    // Request new access token from Zoom
    const tokenResponse = await axios.post(
      "https://zoom.us/oauth/token",
      null,
      {
        params: {
          grant_type: "refresh_token",
          refresh_token: refresh_token,
        },
        auth: {
          username: process.env.ZOOM_CLIENT_ID,
          password: process.env.ZOOM_CLIENT_SECRET,
        },
      }
    );

    const zoomAccessToken = tokenResponse.data.access_token;
    const zoomRefreshToken = tokenResponse.data.refresh_token;

    await saveToken(zoomRefreshToken);

    res.json({
      accessToken: zoomAccessToken,
      refreshToken: zoomRefreshToken,
      message: "Zoom access token refreshed successfully!",
    });
  } catch (err) {
    console.error(
      "Zoom token refresh error:",
      err.response?.data || err.message
    );
    res.status(500).json({ message: "Failed to refresh access token" });
  }
};

const zoomRegisterWebinar = async (req, res) => {
  try {
    const {
      email,
      first_name,
      last_name,
      phone_number,
      webinar_id,
      occurrence_id,
    } = req.body;

    if (!webinar_id) {
      return res.status(400).json({ error: "webinar_id is required" });
    }

    if (!occurrence_id) {
      return res.status(400).json({ error: "occurrence_id is required" });
    }

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Zoom token missing in headers" });
    }

    // Register user for the specific occurrence
    const zoomRes = await axios.post(
      `https://api.zoom.us/v2/webinars/${webinar_id}/registrants?occurrence_ids=${occurrence_id}`,
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

    let startTime = null;

    if (data.occurrences && Array.isArray(data.occurrences)) {
      const matched = data.occurrences.find(
        (occ) => occ.occurrence_id === occurrence_id
      );

      if (matched) {
        startTime = matched.start_time;
      }
    }

    // Fallback: not found
    if (!startTime) {
      startTime = data.start_time; // fallback to main webinar time
    }

    // Save to DB
    const registerUser = await createUserRegistration(
      email,
      first_name,
      last_name,
      phone_number,
      String(data.id),
      data.registrant_id,
      data.topic,
      startTime,
      data.join_url
    );

    return res.json(registerUser);
  } catch (error) {
    console.error(error.response?.data || error);
    return res.status(500).send("Failed to register user");
  }
};

const zoomParticipants = async (req, res) => {
  try {
    const { webinar_id } = req.query;

    if (!webinar_id) {
      return res.status(400).json({ error: "webinar_id is required" });
    }

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Zoom token missing in headers" });
    }

    // Fetch participants from Zoom
    const zoomRes = await axios.get(
      `https://api.zoom.us/v2/report/webinars/${webinar_id}/participants`,
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
        webinar_id,
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

const getZoomOccurrences = async (req, res) => {
  try {
    const { webinar_id } = req.query;

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Zoom token missing in headers" });
    }

    // Fetch webinar details from Zoom
    const response = await axios.get(
      `https://api.zoom.us/v2/webinars/${webinar_id}`,
      {
        headers: {
          Authorization: authHeader,
        },
      }
    );

    const occurrences = response.data.occurrences || [];

    // Convert occurrences to a clean format for frontend
    const formatted = occurrences.map((occ) => {
      const dateObj = new Date(occ.start_time);

      return {
        occurrence_id: occ.occurrence_id,
        date: dateObj.toISOString().split("T")[0],
        time: dateObj.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        start_time: occ.start_time, // Keep original ISO
      };
    });

    res.json({
      webinar_id,
      occurrences: formatted,
    });
  } catch (err) {
    console.error(err.response?.data || err);
    res.status(500).json({ error: "Failed to get occurrences" });
  }
};

module.exports = {
  zoomConnect,
  zoomCallback,
  zoomRefresh,
  zoomRegisterWebinar,
  zoomParticipants,
  zoomMergedReport,
  getZoomOccurrences,
};
