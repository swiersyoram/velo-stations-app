const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const jwt = require("jsonwebtoken");
const auth = require("./auth.js");

app.use(cors());
app.use(express.json());

// routes
app.get("/", function (req, res) {
  res.status(200).json({ status: "api is online" });
});

app.get("/stations", auth.authenticateToken, function (req, res) {
  if (req.jwt) {
    axios
      .get("https://api.citybik.es/v2/networks/velo-antwerpen")
      .then((data) => {
        //   console.log(res);
        res.status(200).json(data.data);
      });
  }
});

app.use("/auth", auth.router);
//start server
app.listen(port, () => {
  console.log(`Velo API server listening at http://localhost:${port}`);
});
