const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const { errorHandler } = require("./middleware/errorHandler");
const PORT = 3500;

// cors
app.use(cors(corsOptions));

// built-in middleware to handle form data
// "content-type : application/x-www-form-urlendcoded"
app.use(express.urlencoded({ extended: false }));

// buit-in middleware for json
app.use(express.json());

// server static file
app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/sub", express.static(path.join(__dirname, "/public")));

// routes
app.use("/", require("./routes/root"));
app.use("/sub", require("./routes/subdir"));

// API
app.use("/api/v1", require("./api/v1"));

app.all("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
