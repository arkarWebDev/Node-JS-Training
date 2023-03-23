const { v4: uuid } = require("uuid");
const data = {
  students: require("../models/v1.json"),
  setStudents: function (data) {
    this.students = data;
  },
};

const getAllStudents = (req, res) => {
  res.json(data.students);
};

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

const getStudent = (req, res) => {
  const currentStudent = data.students.find(
    (student) => student.id === Number(req.params.id)
  );

  if (!currentStudent) res.json({ message: "something went worng!" });
  res.json(currentStudent);
};

module.exports = {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudent,
};
