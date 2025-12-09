const express = require("express");
require("dotenv").config();
const zoomRoute = require('./routes/zoomRoute')
const cors = require("cors");
const startCronJobs = require('./cron/zoomCron.js')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
 res.send("WELCOME TO WEBX API");
})

app.use('/zoom', zoomRoute)

startCronJobs();




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
