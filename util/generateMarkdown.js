function generateMarkdown(userResonses, userInfo) {

    let draftToC = `## Table of Contents`;

    if (userResonses.installation !== '') { draftToC += `
    * [Installation](#installation)`};

    if (userResponses.usage !== '') { draftToC += `
    * [Usage](#usage)` };
  
    if (userResponses.contributing !== '') { draftToC += `
    * [Contributing](#contributing)` };
  
    if (userResponses.tests !== '') { draftToC += `
    * [Tests](#tests)` };

    let draftMarkdown = 
    `# ${userResonses.title}`
}