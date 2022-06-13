const inquirer = require('inquirer')
const fs = require('fs')

const LISENCES = {
  "Apache 2.0 License": "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",

  "Boost Software License 1.0": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",

  "BSD 3-Clause License": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",

  "GNU GPL v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",

  "IBM Public License Version 1.0": "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",

  "ISC License (ISC)": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",

  "The MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",

  "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",

  "The Perl License": "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"

}

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter your project title: ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'description: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'describe the installation process',
      name: 'installation',
    },
    {
      type: 'list',
      message: 'please select a license for the project: ',
      name: 'license',
      choices: Object.keys(LISENCES)
    },
    {
      type: 'input',
      message: 'what is the project usage?: ',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'enter names of contributors ',
      name: 'contributors',
    },
    {
      type: 'list',
      message: 'Is there a test include',
      name: 'test',
      choices: ['Yes', 'No']
    },
    {
      type: 'input',
      message: 'Please enter your github Username:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please enter your email adress:',
      name: 'email',
    },
  ])

  .then((data => {
    const filename = 'README.MD';

    const content = `# Project title: **${data.title}**\n\n` +
      `## License\n` +
      `${LISENCES[data.license]}\n` +
      `## Description\n` +
      `${data.description}\n\n` +
      `## Installation\n` +
      `${data.installation}\n\n` +
      `## Usage\n` +
      `${data.usage}\n\n` +
      `## credit\n` +
      `${data.contributors}\n\n` +
      `## Testing\n` +
      `${data.test}\n\n` +
      `## Github\n` +
      `https://github.com/${data.github}\n` +
      `## Email\n` +
      `Contact Email: ${data.email}`


    fs.writeFile(filename, content, (err) =>
      err ? console.log(err) : console.log('Success!'))
  }));