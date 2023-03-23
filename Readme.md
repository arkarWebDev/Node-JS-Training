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

## MVC REST API CRUD

Firstly to look more cleaner and standard we replace cors options to config/corsOption.js and make a controller for api version 1.

In CRUD controller

we use uuid form id of students

```javascript
const { v4: uuid } = require("uuid");
const data = {
  students: require("../models/v1.json"),
  setStudents: function (data) {
    this.students = data;
  },
};
```

Create

Step1 : we need to check there was data or blank.

Step2 : create new object to update the original data.

Step3 : Set new data with current data using spread operator.

```javascript
const createStudent = (req, res) => {
  if (!req.body.firstname || !req.body.lastname)
    res.json({ message: "something went worng!" });
  const newStudent = {
    id: uuid(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  data.setStudents([...data.students, newStudent]);
  res.json(newStudent);
};
```

Read

Get all students

steps are too simple.

```javascript
const getAllStudents = (req, res) => {
  res.json(data.students);
};
```

Get student by id

Step1 : find the student with that id,

Step2 : check there was data or empty.

```javascript
const getStudent = (req, res) => {
  const currentStudent = data.students.find(
    (student) => student.id === Number(req.params.id)
  );

  if (!currentStudent) res.json({ message: "something went worng!" });
  res.json(currentStudent);
};
```

Update

Step1 : find the original data object.

Step2 : check there was data or empty.

Step3 : check there was updated data in request or not.

Step4 : filter the original data array by removing the original object.

Step5 : Set new data with current data using spread operator.

```javascript
const updateStudent = (req, res) => {
  const currentStudent = data.students.find(
    (student) => student.id === req.body.id
  );

  if (!currentStudent) res.json({ message: "something went worng!" });

  if (req.body.firstname) currentStudent.firstname = req.body.firstname;
  if (req.body.lastname) currentStudent.lastname = req.body.lastname;

  const filteredStudents = data.students.filter(
    (student) => student.id !== currentStudent.id
  );

  data.setStudents([...filteredStudents, currentStudent]);
  res.json(currentStudent);
};
```

Delete

Step1 : find the student with that id,

Step2 : check there was data or empty.

Step3 : filter the object with that data.

Step4 : update the original array with filtered array.

```javascript
const deleteStudent = (req, res) => {
  const currentStudent = data.students.find(
    (student) => student.id === req.body.id
  );

  if (!currentStudent) res.json({ message: "something went worng!" });

  const filteredStudents = data.students.filter(
    (student) => student.id !== currentStudent.id
  );
  data.setStudents(filteredStudents);
  res.json(filteredStudents);
};
```

In API

we need to import controller.

Note : you can destructor.But it's can muzzy when more than one controller.

```javascript
const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

router
  .route("/")
  .get(studentController.getAllStudents)
  .post(studentController.createStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);

router.route("/:id").get(studentController.getStudent);

module.exports = router;
```
