var inquirer = require('inquirer');
var fs = require('fs');
var axios = require('axios');
var readMeFileName = 'README.md';
var encoding = 'utf8';
var readMeText = '';

var githubUser = '';
var githubUsersUrl = '';
var questions = '';

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
    var gitHubUserAvatarUrl = '';
    for(var question in response){
        if (question == 'gitUserName'){
            githubUser = response[question];
            githubUsersUrl = 'https://api.github.com/users/'+githubUser;
            //call github api
            axios.get(githubUsersUrl).then(response => {
                gitHubUserAvatarUrl = response.data.avatar_url;
                // console.log(gitHubUserAvatarUrl);
            });
        } else {
            if (question == 'Project Title'){
                readMeText = '# '+question+'\n';
                readMeText += '('+'https://github.com/'+githubUser+'/HW-Week5-README-Generator'+')';
                readMeText += '\n\n\n\n';
            }else {
                readMeText = '# '+question+'\n'+response[question]+'\n\n\n\n';
            }
        }

        // append to file
        fs.appendFileSync(readMeFileName,readMeText,encoding,function(err){
            if (err)
                console.log('error appending to file');
        });
    }

    // append avatar url
    questions = '# Questions'+'\n';
    // questions += '<img src="'+gitHubUserAvatarUrl+'" alt="avatar" style="border-radius:16px" width="30" />'+'\n\n';
    //questions += '\n\n\';
    questions += 'If you have any qestions about the repo, open an issue or contact https://github.com/'+githubUser+' directly';
    fs.appendFileSync(readMeFileName,questions,encoding,function(err){
        if (err)
            console.log('error appending to file');
    });
});
