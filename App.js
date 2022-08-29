const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const http = require("http");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(bodyparser.json());
app.use(cors());

const mongouri = process.env.MONGOURI;

mongoose
  .connect(mongouri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Database got connected!");
    console.log("-----------------------------------------");
  })
  .catch((err) => {
    console.log("something went wrong -?");
    console.log("error :", err);
  });

// -------------server------------------
app.get("/", (request, response) => {
  response.status(200).json({ success: "server is running" });
});

const server = http.createServer(app);

const port = process.env.PORT || 4900;
server.listen(port, () => {
  console.log(`server is running on port :  ${port}`);
});
