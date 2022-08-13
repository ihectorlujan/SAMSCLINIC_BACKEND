const express = require("express");
const router = express.Router();

const requestTime = (req, res, next) => {
  req.requestTime = new Date();
  next();
};

router.use(requestTime);

router.get("/", (req, res) => {
  const value = req.requestTime;
  res.send("Root Pacients Endpoint + " + value);
});

router.get("/all", (req, res) => {
  res.send("All Paciens Endpoint");
});

module.exports = router;
