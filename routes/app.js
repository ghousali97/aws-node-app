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
  res.send(JSON.stringify(message));
});
router.use("/", (req, res) => {
  res.type("json");
  res.send(JSON.stringify(notFound));
});

module.exports = router;
