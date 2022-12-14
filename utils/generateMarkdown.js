function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'APACHE 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'GPL 3.0':
      return '![GitHub license](https://img.shields.io/badge/license-GPL3.0-blue.svg)';
      break;
    case 'BSD 3':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break;
    default:
      return '';
  }
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `\n## License
    \nThis project is licensed under the ${license} license.`;
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.name}

  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of  Contents

* [Installation Command](#installCommand)
* [Usage](#usage)${renderLicenseLink(data.license)}
* [Test Command](#testCommand)
* [Contribution](#constribution)
* [Questions](#question)

## Installation Command: 
  
${data.installCommand}

## Usage 

${data.usage}${renderLicenseSection(data.license)}

## Test Command

${data.testCommand}

## Contribution

${data.contribution}

## Question

If  you have any questions about this app, you can open an issue in the repo or reach me directly at ${data.email}
And see more of my work at (https://github.com/${data.github})`;
}

module.exports = generateMarkdown;
