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
