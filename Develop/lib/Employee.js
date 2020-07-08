// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        this.getName = () => {
         return this.name;   
        };
        this.getId = () => {
         return this.id;   
        };
        this.getEmail = () => {
         return this.email;   
        };
        this.getRole = () => {
            // have initially set as a string, note, may want the object reference instead delete if not needed later
         return 'Employee';   
        };
     
    }
}

// exporting the employee class 
module.exports = Employee