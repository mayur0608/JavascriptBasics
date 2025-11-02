const {Person,Employee} = require('./basics3')


let person = new Person("Mayur", "Baghla");
console.log(person.fullname()); // ✅ Mayur Baghla
console.log(person.age);      // ✅ 25
console.log(person.location); // ✅ Canada

let emp = new Employee("Rohit", "Sharma", "QA Engineer");
console.log(emp.details);     // ✅ Rohit Sharma works as a QA Engineer in Canada
