

// Returns license badge - if there is no license it returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case 'Apache':
      return "[![License: Apache 2](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case 'GNU':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    case 'Mozilla':
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    case 'BSD':
      return "[![License : BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    case 'None':
      return "" 
  }

}

// Returns license link - if there is no license, it returns an empty string
function renderLicenseLink(license) {  switch (license) {
  case 'MIT':
    return "[License: MIT](https://opensource.org/licenses/MIT 'MIT License')"
  case 'Apache':
    return "[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0 'Apache License')"
  case 'GNU':
    return "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
  case 'Mozilla':
    return "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)"
  case 'BSD':
    return "[License: BSD 3](https://opensource.org/licenses/BSD-3-Clause)"
  case 'None':
    return '' 
}}

// Generates the markdown text to be written to the file
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.desc}

  ## Table of Contents

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits

  ## License
  ${renderLicenseLink(data.license)}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Contact Info
  GitHub: [${data.userName}](https://github.com/${data.userName} 'GitHub profile')
  Email: [${data.email}](mailto:${data.email} 'Email address')
`;
}

module.exports = generateMarkdown;
