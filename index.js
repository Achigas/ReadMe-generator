const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const path = require('path')

// mockdata = {
//     title: 'ReadMe Generator',
//     description: 'This code creates a professional ReadMe after a user provides project information. ',
//     installation: "1) Install the NPM modules (Inquirer and FS) 2) Run Node Index 3) Answer Question prompts. 3) ReadMe will write to the 'dist' folder.",
//     usage: 'Answer questions',
//     licenses: [ 'None' ],
//     contributors: 'Alex Chigas,Channing Tatum,Matt Bomer',
//     tests: 'Run a ton of tests to make sure your Read me is perfect!',
//     username: 'Achigas',
//     email: 'Achigas34@gmail.com'
//   }

// array of questions for user
const questions = () => {
    data = []
    return inquirer.prompt([
    
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title? (Required)',
            validate: titleinput => {
                if (titleinput) {
                    return true;
                } else {
                    console.log('Please enter a title!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a project description.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the instructions for installation? Provide a step-by-step description of how to get the environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide examples and instructions for use.'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Which licenses? Choose all that apply.',
            choices: ['MIT', 'Apache','GNU','ISC', 'OBSD', 'None' ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who were the contributing developers including yourself?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List some tests for your application.'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username? (Required)',
            validate: userinput => {
                if (userinput) {
                    return true;
                } else {
                    console.log('Please enter a Github username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])

};

// function to write README file
const writeToFile = pageMD => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', pageMD, err => {
            if (err) {
                reject(err);
                return;
              }

              resolve({
                  ok: true,
                  message: 'ReadMe Created'
                });
            });
        });
    };


//const pageMD = generateMarkdown(mockdata)
//writeToFile(pageMD)


questions()
.then(data => {
    return generateMarkdown(data);
})
.then(pageMD => {
   return writeToFile(pageMD)
})
.catch(err => {
console.log(err);
});
