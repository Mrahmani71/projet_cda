
const express = require('express');
const path = require('path');
const app = express();

//get reference to the class Student
const Student = require(path.join(__dirname, 'objects/Student'));

//create new Student object
var stu = new Student('jennifer', 27, 'F', 3.8);

//url: localhost:3000/
app.get('/', function(req, res) {
    res.json(stu.getStudentInfo());
});

app.listen(3000, () => console.log('server running on 3000'));
