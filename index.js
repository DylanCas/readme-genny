// Node Modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require('path');


//  User input question array
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of the Project?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please provide a brief description;',
        name: 'description',
    },
    {
        type: 'list', // look into 'list' documentation
        message: 'Choose a license for your project:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be ran to install dependencies?',
        default: 'npm i',
        name: 'installCommand',
    },
    {
        type: 'input',
        message: 'What are testing instructions?',
        name: 'testCommand',
        default: 'npm test',
    },
    {
        type: 'input',
        message: 'How is the app used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can others contribute to the project?',
        name: 'contribution',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFileSync(path.resolve(__dirname, 'dist', fileName), data)
    fs.writeFileSync(path.join(process.cwd(), 'dist', fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        // console.log(generateMarkdown(userAnswers))
        writeToFile('README.md', generateMarkdown(userAnswers))
    })
}

// Function call to initialize app
init();