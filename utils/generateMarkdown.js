const generatelist = commalist => {
  listarray = commalist.split(",")
  listarray = listarray.map(listitem => "*  " + listitem)
  return listarray.join("\ ")
}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  const {title, description, installation, usage, licenses, contributors, tests, username, email} = data
  return `

# ${title}
https://img.shields.io/github/license/achigas/readme-generator

## Description
${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${installation}

## Usage
${usage}

## Licenses
${licenses}

## Contributing
${generatelist(contributors)}

## Tests
${tests}

## Questions
Github: [${username}](https://www.github.com/${username})
Email: ${email}
`;
}

module.exports = generateMarkdown;
