var inquirer = require('inquirer');
var fs = require('fs');
var readMeFileName = 'README.md';
var encoding = 'utf8';
var initText = '# README';
var readMeText = '';

// array of question objects
var prompts = [
    {
        "type": "input",
        "name": "GitHub Username",
        "message": "What is your GitHub User name"
    },
    {
        "type": 'input',
        "name": 'Project Title',
        "message": "What is Project Title"
    },
    {
        "type": 'input',
        "name": 'Project Description',
        "message": "What is Project Description"
    },
    
    {
        "type": 'input',
        "name": 'Table of Contents',
        "message": "What are Table of Contents"
    },
    {
        "type": 'input',
        "name": 'Installation',
        "message": "What are the Installation Steps"
    },
    {
        "type": 'input',
        "name": 'Usage',
        "message": "What are the Usage Steps"
    },
    {
        "type": 'input',
        "name": 'License',
        "message": "What are the License Details"
    },
    {
        "type": 'input',
        "name": 'Contriuting',
        "message": "What are the Contributing Steps"
    },
    {
        "type": 'input',
        "name": 'Tests',
        "message": "What are the Test Steps"
    },

]



inquirer.prompt(prompts).then(answers => 
    {
    
    console.log(JSON.stringify(answers, null, ' '));
    
    
   
});
