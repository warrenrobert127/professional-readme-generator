const inquirer = require("inquirer")
const fs = require("fs")

function userInput() {
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Porject name ?",
            name:"project"
        },
        {
            type:"input",
            message:"Enter Porject description ?",
            name:"description"
        
        },
        {
            type:"input",
            message:"Installation instruction ?",
            name:"installation"
        },
        {
            type:"input",
            message:"Enter Testing requirements?",
            name:"testing"
        },
        {
            type:"input",
            message:"Enter Project Usage ?",
            name:"usage"
        },
        {
            type:"list",
            choices:["MIT","ISC","APACHE 2.0","GPL","none"],
            message:"Enter Porject License ?",
            name:"license"
        },
        {
            type:"input",
            message:"Enter Project Contributors ?",
            name:"contributers"
        },
        {
            type:"input",
            message:"Enter Project Questions?",
            name:"questions"
        },
    ]).then(({project,description,installation,testing,usage,license,contributors,questions,requirements}) =>{
        var READMETEXT = `
# Project Title: ${project}
### Description: ${description}

#### Table of Contents
------------------------
* [Installation](#installation)
* [Description] (#description)
* [Requirements] (#requirements)
* [Usage] (#usage)
* [License] (#license)
* [Contributors] (*contributors)
* [Questions] (#questions)

// make number of comments same order as above
##### Installation
${installation}


        `
    })
}