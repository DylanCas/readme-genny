// Node Modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

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
        name: 'installInstruct',
    },
    {
        type: 'input',
        message: 'What are testing instructions?',
        name: 'test',
        default: 'npm test',
    },
    {
        type: 'input',
        message: 'Please provide a table of contents;',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'How is the app used?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'How can others contribute to the project?',
        name: 'contribution',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        console.log(generateMarkdown(userAnswers))
        
    })
}

// Function call to initialize app
init();

/* 
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
 */