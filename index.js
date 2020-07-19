const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
        fs.writeFile('./dist/README.md', pageMD, err => {
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


questions()
.then(data => {
    return generateMarkdown(data);
})
.then(pageMD => {
   return writeToFile(pageMD)
})
.then(writefileResponse => {
    console.log(writefileResponse.message)
})
.catch(err => {
console.log(err);
});
