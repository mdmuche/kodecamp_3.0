const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");
const taskRoute = require("./routes/tasks");
const authRoute = require("./routes/auth");

const app = express();

const { taskCollection } = require("./schema/taskSchema");

const connectDb = mongoose
  .connect(process.env.mongoDbUrl)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("couldn't connect to db", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/v1/tasks", taskRoute);
app.use("/v1/auth", authRoute);

app.listen(port, function () {
  console.log(`listening for request on port ${port}`);
});
