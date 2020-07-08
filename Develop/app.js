const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { O_DIRECTORY } = require("constants");

const teamArr = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


function buildTeam() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to?",
        choices: ["Add an Engineer", "Add an Intern", "Add the Manager", "Generate Our TeamPage"]
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
                console.log('Adding the Manager')
                createManager();
                break;

            case "Generate Our TeamPage":
                console.log("Now making your Team Page, \n Thank you For using CodeCrow's Team Template Engine")
                //WORKSPACE**
                
                
                if (teamArr) {
                    // notes from below 
                    // Hint: you may need to check if the `output` folder exists and create it if it
                    // does not. 

                    // The below code block throws a minor error - no such file or directory, error no -4058. maybe  have to first MAKE a file called team in outputPath, and THEN call fs.writeFile. or maybe we need fs.writeToFile? Upon trying some dated fixes with googlefu, still no functional answer. ask tomorrow.
                    //  maybe declare the below function globally, wrap the below in an `if (outputPath) {} else {make a filepath and then write}`
                    //***update:made the folder manually already, still not pathing correctly.***

                    fs.writeFile(outputPath, render(teamArr), function(err) {
                        if (err) {
                                return console.log(err);
                            }
                            console.log("Successfully Written TeamPage, check your output folder");
                    })

                }
                                    
                //WORKSPACE**   

                break;
                
            default:
                break;
            }
        })
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
        teamArr.push(newEngineer);
        //testing functionality of adding engineer to team
        // console.log(teamArr);
        buildTeam();
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
    teamArr.push(newIntern);
    // console.log(teamArr);
    buildTeam();
}
)
}

function createManager() {
// Two possible options for solution to issue of trying to input more than one manager:

//if (!teamArr.includes(Manager) {add one} else {buildTeam()})
//
// if(teamArr.filter(member => member.role === "Manager").length>0) {
// console.log("E Sayz We Already Got One!")
// buildTeam();
// } else {sandwich inquirer info in here}
//

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
 ]).then(function(answers){
    const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamArr.push(newManager);
    // console.log(teamArr);
    buildTeam();
}
)
}

buildTeam();
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