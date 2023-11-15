const inquirer = require('inquirer');
const {writeFile} = require('fs').promises
const generateMarkdown = require('./utils/generateMarkdown')
// questions to use with inquirer
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title: '
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Description: '
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation Instructions: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information: '
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guiidelines: '
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'License: ',
        choices: ['MIT', 'Apache', 'GNU', 'Mozilla', 'BSD']
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Github username: '
    },    {
        type: 'input',
        name: 'email',
        message: 'E-mail address: '
    },
];

// response object will have 
//    title:
//    desc:
//    install:
//    usage:
//    contribution:
//    test:
//    license:
//    userName:
//    email:

function init() {
    // get information for the file from the user
    inquirer.prompt(questions)
        .then( answers => {
            // write the information to the file in markdown format
            writeFile("./output/README.md", generateMarkdown(answers))
                .then( () => {
                    console.log("Written to file")
                })
        })
        .catch( error => {
            console.error(error)
        })   
}   

// Function call to initialize app
init();
