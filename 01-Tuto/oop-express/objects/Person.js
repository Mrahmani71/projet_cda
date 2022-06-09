//constructor
function Person(name, age, gender){
  this._name = name;
  this._age=age;
  this._gender=gender;
};

//method personInfo()
Person.prototype.personInfo = function(){
      return "Person info: \n   name: " + this._name + " \n   age: " + this._age + " \n   gender: "+ this._gender +"\n";
};

//export Person object as a module
module.exports = Person;