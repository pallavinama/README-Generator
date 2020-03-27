var inquirer = require('inquirer');
var fs = require('fs');
var readMeFileName = 'README.md';
var encoding = 'utf8';
var readMeText = '';

// array of question objects
var questions = [
    {
        "type": "input",
        "name": "gitUserName",
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
        "name": 'Contributing',
        "message": "What are the Contributing Steps"
    },
    {
        "type": 'input',
        "name": 'Tests',
        "message": "What are the Test Steps"
    },

]

// write file
fs.writeFile(readMeFileName,'',encoding,function(err){
     if (err)
        console.log('error writing to file');
});

// prompt for questions
inquirer.prompt(questions).then(response => {
    for(var question in response){
        if (question != 'gitUserName'){
            readMeText = '# '+question+'\n'+response[question]+'\n\n\n\n';
            fs.appendFile(readMeFileName,readMeText,encoding,function(err){
                if (err)
                    console.log('error appending to file');
            });
        }
    }
});
