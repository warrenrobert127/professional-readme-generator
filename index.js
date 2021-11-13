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
            message:"Enter Project Tests ?",
            name:"tests"
        },
        {
            type:"input",
            message:"Enter Project Questions?",
            name:"questions"
        },
    ])
}