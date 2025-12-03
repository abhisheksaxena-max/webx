const express = require("express");
require("dotenv").config();
const zoomRoute = require('./routes/zoomRoute')
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
  console.log('welcome to webx');
})

app.use('/zoom', zoomRoute)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
