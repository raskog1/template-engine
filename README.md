
  # template-engine

  * [Usage](#usage)
  * [Tools](#tools)
  * [Roadmap](#roadmap)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description

  Using some pregenerated code, I created a software engineering team generator command line application.  It prompts the user for information about various team members and their roles, and then generates a team roster via HTML for viewing.  The project was also required to pass all written tests included in the pregenerated code.

  ## Usage

  From the application folder, run terminal, install all dependencies, and then run the app.js file using node.  You will then be prompted for information related to your team members.  At the end of each member, you will be asked if you want to add additional team members, or to end the program and generate the HTML.

  ## Tools

  The following tools were used in the development of this project:
   HTML, JavaScript, jQuery, JSON, Node.js

  ## Roadmap

  Refinement of the HTML elements would be a top priority, and the an expansion of roles and relevant information.

  ## Contributions

  If you are interested in contributing, please email me at ryan.skog@outlook.com
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

  ## Tests

  PASS  test/Intern.test.js
  √ Can set school via constructor (3ms)
  √ getRole() should return "Intern"
  √ Can get school via getSchool()

  PASS  test/Engineer.test.js
  √ Can set GitHUb account via constructor (4ms)
  √ getRole() should return "Engineer" (1ms)
  √ Can get GitHub username via getGithub()

  PASS  test/Manager.test.js
  √ Can set office number via constructor argument (5ms)
  √ getRole() should return "Manager" (1ms)
  √ Can get office number via getOffice()

  PASS  test/Employee.test.js
  √ Can instantiate Employee instance (5ms)
  √ Can set name via constructor arguments
  √ Can set id via constructor argument (1ms)
  √ Can set email via constructor argument (1ms)
  √ Can get name via getName()
  √ Can get id via getId() (1ms)
  √ Can get email via getEmail() (1ms)
  √ getRole() should return "Employee"

  Test Suites: 4 passed, 4 total
  Tests:       17 passed, 17 total
  Snapshots:   0 total
  Time:        2.896s
  Ran all test suites matching /test\\*/i.

  ## Questions

  Please email all questions to ryan.skog@outlook.com.

  