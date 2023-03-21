const express = require("express");
const app = express();
const path = require("path");

const PORT = 3500;

app.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// ROUTE HANDLER
// One
app.get(
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
app.get("/phrase", [stateOne, stateTwo, stateThree]);

app.get("/old-about(.html)?", (req, res) => {
  // default status is 302
  res.redirect(301, "/about.html");
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
