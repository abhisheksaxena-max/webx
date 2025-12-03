const express = require("express");
require("dotenv").config();
const zoomRoute = require('./routes/zoomRoute')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get('/', (req,res)=>{
  console.log('welcome to webx');
  
})
// 1 Redirect user to Zoom OAuth to authorize app
// app.get("",);

// // 2 Handle OAuth callback and exchange code for access token
// app.get("/zoom/oauth/callback",);

// // 3 Refresh access token
// app.get("/zoom/refresh",);

// // 4 register a webinar
// app.post("/zoom/registar-webinar", );

// app.get("/zoom/participants",  );

// app.get("/api/webinar/merged-report", );

app.use('/zoom', zoomRoute)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
