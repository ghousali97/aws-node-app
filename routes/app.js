const express = require("express");

const router = express.Router();

const message = {
  mesage: "Hello world",
};
const notFound = {
  error: "Hello world",
};

router.get("/", (req, res) => {
  res.type("json");
  console.log("Get request received");
  res.send(JSON.stringify(message));
});
router.use("/", (req, res) => {
  res.type("json");
  console.log("URL not foun");
  res.send(JSON.stringify(notFound));
});

module.exports = router;
