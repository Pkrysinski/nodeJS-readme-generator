const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ projectTitle, description, installInstructions, usageInfo, licenseInfo, contributionGuidelines, testInstructions, userName, emailAddress}) =>
`# ${projectTitle}

## Description
${description}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

## Installation
${installInstructions}

## Usage
${usageInfo}

## License
${licenseInfo}

## Contributing
${contributionGuidelines}

## Tests
${testInstructions}

## Questions
Link to GitHub Repo: https://github.com/Pkrysinski/${userName}
Please reach out to me at ${emailAddress}
`;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'projectTitle',
    },
    {
    type: 'input',
    message: 'Please enter a description of the project!',
    name: 'description',
    },    
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'installInstructions',
    },
    {
      type: 'input',
      message: 'Please enter any relevant usage information...',
      name: 'usageInfo',
    },
    {
    type: 'input',
    message: 'Please enter in any contribution guidelines...',
    name: 'contributionGuidelines',
    },
    {
    type: 'input',
    message: 'How do you test this application?',
    name: 'testInstructions',
    },
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'userName',
    },    
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'emailAddress',
    },       
  ])
  .then((response) => {
    const readmePageContent = generateHTML(response);
    fs.writeFile('newREADME.md', readmePageContent, (err) =>
    err ? console.error(err) : console.log('Success!'))
  }

  );
