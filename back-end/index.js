const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const homeRoute = require("./routers/home");
const apiRoute = require("./routers/api/zing.js");
const authRoute = require("./routers/auth.js");

const app = express();
const port = 3000;
dotenv.config()

app.use(cors())
app.use(express.json())
app.use("/", homeRoute);
app.use("/api", apiRoute);
app.use("/v1/auth", authRoute)

app.listen(port, () => {
  console.log("server is running...");
});

mongoose.connect(process.env.MONGODB_URL ,() => {
  console.log("connected TO mongo DB");
})
