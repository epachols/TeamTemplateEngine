const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArr = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function buildTeam() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What do you wanna do?",
        choices: ["Add an Engineer", "Add an Intern", "Add the Manager", "Generate"]
    }).then(function ({ choice }) {
        switch (choice) {
            case "Add an Engineer":
                console.log('Adding an engineer')
                createEngineer();
                break;

            case "Add an Intern":
                console.log('Adding an Intern')
                createIntern();
                break;

            case "Add the Manager":
                console.log('making an engineer')
                createManager();
                break;

            default:
                console.log("Now making your Team Page, \n Thank you For using CodeCrow's Team Template Engine")
                //if there are team members in the teamArr, then run the render
               // *******AFTER handling the creation of others, GO on this**
                // if (teamArr) {
                //     //may need the () below, may not. check
                //     render();
                // }
                break;
        }
    })
    // first ask what to do? quit or add a person (could extend to different types of employee)
    // if quit, done. if adding a person, what type?
    // once type is picked, ask for (based on type): name, id, email, [school, office, etc])
}


function createEngineer() {
 inquirer.prompt([
     {
         type: "input",
         message: "Employee's Name?",
         name: "name"
     },
     {
         type: "input",
         message: "Employee ID?",
         name: "id"
     },
     {
         type: "input",
         message: "Employee Email?",
         name: "email"
     },
     {
         type: "input",
         message: "Employee github name?",
         name: "github"
     },
 ]).then(function(answers){
     const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
     console.log(newEngineer);
 }
 )
}

function createIntern() {
 inquirer.prompt([
     {
         type: "input",
         message: "Employee's Name?",
         name: "name"
     },
     {
         type: "input",
         message: "Employee ID?",
         name: "id"
     },
     {
         type: "input",
         message: "Employee Email?",
         name: "email"
     },
     {
         type: "input",
         message: "School Attending?",
         name: "school"
     },
 ]).then(function(answers){
    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
    console.log(newIntern);
    buildTeam();
}
)
}

function createManager() {
 inquirer.prompt([
     {
         type: "input",
         message: "Manager's Name?",
         name: "name"
     },
     {
         type: "input",
         message: "Manager ID?",
         name: "id"
     },
     {
         type: "input",
         message: "Manager's Email?",
         name: "email"
     },
     {
         type: "input",
         message: "Office Number?",
         name: "officeNumber"
     },
 ]).then()
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
buildTeam();