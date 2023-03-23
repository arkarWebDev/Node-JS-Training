# DAY - 3

In section 1 :-

Study about express js routing such as ( send, sendFile, redirect, route handler)

## Syntax

```bash
  ^/$|index(.html)?
```

(.html)? means it's optional.

| means or operator.

^/$ means can be anything beside / .

# DAY - 4

Study about middleware & router

## 3 types of middleware

built-in middleware

custom middleware

3rd party middleware

## some built-in middleware

```javascript
// built-in middleware to handle form data
// "content-type : application/x-www-form-urlendcoded"
app.use(express.urlencoded({ extended: false }));
```

```javascript
// buit-in middleware for json
app.use(express.json());
```

```javascript
// server static file
app.use(express.static(path.join(__dirname, "/public")));
```

## clean up cors and whitelist domain

first install cors

```bash
npm install cors
```

```javascript
const cors = require("cors");

// cors
const whitelist = [
  "https://ww.sitename.com",
  "http://123.0.0.1:5500",
  "http://localhost:3500/",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by cors."));
    }
  },
};
app.use(cors(corsOptions));
```

## Routing

first study about group routes

create route.js

```javascript
// imports the following
const express = require("express");
const router = express.Router();
const path = require("path");

// examples
router.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

router.get("/about(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "about.html"));
});
```

and in server.js

make server static access to the route path and define route

```javascript
// server static file
app.use("/path", express.static(path.join(__dirname, "/public")));

// routes
app.use("/path", require("route.js file path"));
```

## Dont forget to export router in route and api

```javascript
module.exports = router;
```

study basic of api developments

api developments is same as route group define.

```javascript
const express = require("express");
const router = express.Router();
const data = {};
data.v1 = require("../data/v1.json");
```

basic syntax of CRUD

```javascript
router
  .route("/")
  .get((req, res) => {
    res.json(data.v1);
  })
  .post((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .delete((req, res) => {
    res.json({ id: req.body.id });
  });

router.route("/:id").get((req, res) => {
  res.json({ id: req.params.id });
});
```

in server.js

```javascript
// routes
app.use("/path", require("route.js file path"));
```
