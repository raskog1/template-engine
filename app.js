const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const joi = require("joi");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

function init() {
  inquirer.prompt(questions).then((response) => {
    if (response.role === "Manager") {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      employees.push(manager);
    } else if (response.role === "Engineer") {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employees.push(engineer);
    } else if (response.role === "Intern") {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employees.push(intern);
    }

    console.log(employees);

    inquirer
      .prompt([
        {
          type: "confirm",
          message: "Would you like to add another employee?",
          name: "add",
        },
      ])
      .then((response) => {
        if (response.add) {
          init();
        } else {
          fs.writeFileSync(outputPath, render(employees));
        }
      });
  });
}

const questions = [
  {
    type: "input",
    message: "Enter name",
    name: "name",
    validate: function validateName(name) {
      return name !== "";
    },
  },
  {
    input: "number",
    message: "Enter ID number",
    name: "id",
    validate: function validateID(name) {
      return name !== "";
    },
  },
  {
    type: "input",
    message: "Enter email address",
    name: "email",
    validate: function validateEmail(name) {
      let valid;
      joi.validate(name, joi.string().email(), function (err, val) {
        if (err) {
          console.clear();
          valid = console.log("Please enter a valid email address.");
        } else {
          valid = true;
        }
      });
      return valid;
    },
  },
  {
    type: "list",
    message: "Select an employee position",
    name: "role",
    choices: ["Intern", "Engineer", "Manager"],
  },
  {
    type: "number",
    message: "Please enter a phone number",
    name: "officeNumber",
    when: function (response) {
      return response.role === "Manager";
    },
    validate: function validateOfficeNumber(name) {
      return name !== "";
    },
  },
  {
    type: "input",
    message: "Enter school of record",
    name: "school",
    when: function (answers) {
      return answers.role === "Intern";
    },
    validate: function validateSchool(name) {
      return name !== "";
    },
  },
  {
    type: "input",
    message: "Enter Github profile name",
    name: "github",
    when: function (answers) {
      return answers.role === "Engineer";
    },
    validate: function validateGithub(name) {
      return name !== "";
    },
  },
];

init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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
