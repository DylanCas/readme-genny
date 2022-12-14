// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.name}

  ## Description

  ${data.description}

  ## Table of  Contents

  * [Installation Command](#installCommand)
  * [Usage](#usage)
  * [Test Command](#testCommand)
  * [Contribution](#constribution)
  * [Questions](#question)

  ## Installation Command: 
  
  ${data.installCommand}

  ## Usage 

  ${data.usage}

  ## Test Command

  ${data.testCommand}

  ## Contribution

  ${data.contribution}

  ## Question

  If  you have any questions about this app, you can open an issue in the repo or reach me directly at ${data.email}
  And see more of my work at (https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
