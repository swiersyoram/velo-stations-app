let router = require("express").Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.get("/register", function (req, res) {
  const token = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "365d",
  });
  res.status(200).json({ jwt: token });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null)
    return res.status(401).json({
      Warning:
        "If you have permission to access this API please provide a valid key.",
    });
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ status: "token not valid" });
    req.jwt = authHeader;
  });
  next();
}

module.exports = { router, authenticateToken };
