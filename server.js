const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

require("./config/db");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');

app.use(cookieParser());

const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const projectRoutes = require("./routes/projectRoutes")


app.use("/api/v1",userRoutes)
app.use("/api/v1/project",projectRoutes)
app.use("/api/v1/payment",paymentRoutes)


app.get("/",(req,res)=>{
    res.send("<center><h1>Freelancer Project Management </h1><br>Get Recipe Api <a href=https://github.com/Devanshiballar/Freelancer-Project-Management.git target=_blank>Repository :Freelancer Project Management </a></center>")
  })
  
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });