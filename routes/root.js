const express = require("express");
const router = express.Router();
const path = require("path");

router.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

router.get("/about(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "about.html"));
});

// ROUTE HANDLER
// One
router.get(
  "/contact",
  (req, res, next) => {
    console.log("New customer entered contact.");
    next();
  },
  (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact.html"));
  }
);

// Two
const stateOne = (req, res, next) => {
  console.log("state one passed");
  next();
};
const stateTwo = (req, res, next) => {
  console.log("state two passed");
  next();
};
const stateThree = (req, res) => {
  console.log("state three passed");
  res.sendFile(path.join(__dirname, "views", "phrase.html"));
};
router.get("/phrase", [stateOne, stateTwo, stateThree]);

router.get("/old-about(.html)?", (req, res) => {
  // default status is 302
  res.status(301).redirect(301, "/about.html");
});

module.exports = router;
