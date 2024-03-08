const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//1 . for production purpose
const path = require("path");

//dotenv configuration jo b .env variables h wh hmri app mein configure horhy or hameesha isy sb sy phly likhnaa h w
//wrna kaam nahi krien gy
dotenv.config();

//rest object directly express ko use nahi krskty usko variable k andar store krna prta h
const app = express();

//miidlewares
app.use(cors()); //cors enabling
app.use(express.json()); //parsing the json data phly bodyparser use krty thy

//2 . for production purpose static file ko access krny k lye
app.use(express.static(path.join(__dirname, "./client/build"))); //static files serve horhien h

//3 . for production purpose only
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html")); //index.html jo mail file h run krny k lye
});

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute")); //1st end point or 2nd us end point pr knsy routes call horhy

// app.get("/", (req, res) => {
//   res.status(200).send({ message: "Welcome to our API!" });
// });

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
