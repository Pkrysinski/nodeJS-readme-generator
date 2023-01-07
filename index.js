// Initialize variables for Inquirer and File System
const inquirer = require('inquirer');
const fs = require('fs');

// Take results from inquirer user question prompts and render them to the README template based on template literals
const generateREADME = ({ projectTitle, description, installInstructions, usageInfo, licenseInfo, contributionGuidelines, testInstructions, userName, emailAddress}) =>
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

// User Inquirer to prompt user (in terminal via NodeJS) for answers based on questions about subjects in the standard README file template
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
    {
    type: 'list',
    message: 'Please select a license...',
    name: 'licenseInfo',
    choices: ['MIT', 'Apache License 2.0', 'None'],
    },       
  ])
  // Once user prompts have been completed, pass the object to the generateREADME function to build the README file based on the answers given.
  .then((response) => {
    const readmePageContent = generateREADME(response);
    fs.writeFile('newREADME.md', readmePageContent, (err) =>
    err ? console.error(err) : console.log('Success!'))
  });
