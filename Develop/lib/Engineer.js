// Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        //inheriting the traits from employee
        this.github = github;

        this.getGithub = () => {
         return this.github;   
        };
        this.getRole = () => {
         return 'Engineer';   
        };
    }   
    
}

//exporting complete engineer function
module.exports = Engineer