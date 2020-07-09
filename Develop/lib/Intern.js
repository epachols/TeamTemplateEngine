// Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        //inheriting the traits from employee
        this.school = school;

        this.getSchool = () => {
         return this.school;   
        };
        this.getRole = () => {
         return 'Intern';   
        };
    }       
}
//exporting complete engineer function
module.exports = Intern