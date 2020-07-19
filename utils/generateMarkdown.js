const generateList = commalist => {
  listarray = commalist.split(",")
  listarray = listarray.map(listitem => "* " + listitem)
  return listarray.join("  \n")
}

const generatebadges = BadgeArr => {
    BadgeArr = BadgeArr.map(itemBadge => {
      if (itemBadge !== "None") {
        return "![License](https://img.shields.io/static/v1?label=License&message=" + itemBadge + "&color=BLUE)"
      }
    })
    return BadgeArr.join(" ")
}
  

const generateObjectList = objectLicense => {
  objectLicense = objectLicense.map(itemLicense => "* " + itemLicense)
  return objectLicense.join("  \n")
}


// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  const {title, description, installation, usage, licenses, contributors, tests, username, email} = data
  return `

${generatebadges(licenses)}

# ${title}


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
${generateObjectList(licenses)}

## Contributing
${generateList(contributors)}

## Tests
${tests}

## Questions
Contact information for questions:  \n

Github: [${username}](https://www.github.com/${username})  \n
Email: ${email}
`;
}

module.exports = generateMarkdown;
