const path = require("path");
//get Person.js using path 
var _super = require(path.join(__dirname,'Person'));
//Studens inherits all Person's methods
Student.prototype = Object.create(_super.prototype);

//constructor
function Student(name, age, gender, gpa){
    //call() This function basically allows you to call a function defined 
    //somewhere else, but in the current context.
    _super.call(this, name, age, gender); //parent
    this._gpa=gpa; 
}

//getStudentInfo() method
Student.prototype.getStudentInfo = function(){
    //get String return from personInfo() method of parent class
    return this.personInfo()+ "   Student info: \n      gpa: "+ this._gpa+"\n";
}


//returns a reference to the Object constructor function that created 
//the instance object. Note that the value of this property 
//is a reference to the function itself, not a string containing 
//the function's name.
Student.prototype.constructor = Student;

//export Student object as a module
module.exports = Student;