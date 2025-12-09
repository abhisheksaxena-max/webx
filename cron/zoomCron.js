// const cron = require('node-cron')
// const axios = require('axios')

// const startCronJobs =()=>{

  
// cron.schedule('30 10 * * *', async () => {
//   console.log('[CRON] Running scheduled API call');

//   try {
//     const response = await axios.get(
//           "https://webx-6ba8.onrender.com/zoom/refresh-token"
//         );
//         const token = response?.data?.accessToken;
    
//         const data = await axios.get(
//           "https://webx-6ba8.onrender.com/zoom/participants",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//             params: {
//               webinar_id: "85345478550",
//             },
//           }
//         );

//   } catch (err) {
//     console.error('[CRON] API failed:', err.message);
//   }
// });
// }

// module.exports = startCronJobs;

const cron = require('node-cron');
const axios = require('axios');

const startCronJobs = () => {
  // Array of daily webinar schedules
  const webinarJobs = [
    { time: '32 6 * * *', webinarId: '85345478550' }, // 06:32 UTC
    { time: '45 14 * * *', webinarId: '85345478551' }, // 14:45 UTC
    { time: '00 18 * * *', webinarId: '85345478552' }  // 18:00 UTC
    // { time: '23 14 * * *', webinarId: '85345478550' }, // 06:32 UTC
    // { time: '24 14 * * *', webinarId: '85345478551' }, // 14:45 UTC
    // { time: '25 14 * * *', webinarId: '85345478552' }  // 18:00 UTC
  ];

  webinarJobs.forEach(job => {
    cron.schedule(job.time, async () => {
      console.log(`[CRON] Running webinar ${job.webinarId} at`, 
        new Date().toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles" })
      );

      try {
        // Get refreshed token
        const response = await axios.get("https://webx-6ba8.onrender.com/zoom/refresh-token");
        const token = response?.data?.accessToken;

        // Call participants API
        const data = await axios.get("https://webx-6ba8.onrender.com/zoom/participants", {
          headers: { Authorization: `Bearer ${token}` },
          params: { webinar_id: job.webinarId }
        });
        console.log(data.data);
        
        console.log(`[CRON] Success for webinar ${job.webinarId}`);
      } catch (err) {
        console.error(`[CRON] Failed for webinar ${job.webinarId}:`, err.message);
      }
    });
  });
};

module.exports = startCronJobs;
