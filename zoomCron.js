const cron = require("node-cron");
const axios = require("axios");

const cronData = async () => {
  try {
    const response = await axios.get(
      "https://webx-6ba8.onrender.com/zoom/refresh-token"
    );
    const token = response?.data?.accessToken;

    const data = await axios.get(
      "https://webx-6ba8.onrender.com/zoom/participants",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          webinar_id: "85345478550",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

cronData();
