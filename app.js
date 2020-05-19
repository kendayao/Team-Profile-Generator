// required packages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// team members will go into array
const teamMembers = []

// runs start questions function to ask about the manager
askQuestions();
function askQuestions (){

// asks manager questions
managerQuestions();
function managerQuestions(){

inquirer.prompt([
    {
    type: "input",
    name: "managerName",
    message: "What is your manager's name?"
    },
    {
    type: "input",
    name: "managerID",
    message: "What is your manager's id number?"
    },
    {
    type: "input",
    name: "managerEmail",
    message: "What is your manager's email?"
    },
    {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is your manager's office number?"
    }

    ]).then(function(response){
        let manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber)
        // pushed manager object to team member array
        teamMembers.push(manager)
        // runs create team questions function to ask of they would like ot add an engineer or intern or none
        createTeamQuestions();
    });
    }
    }


function createTeamQuestions(){

    inquirer.prompt([
        {
            type: "list",
            name: "newMember",
            message: "Choose which team member you would like to add?",
            choices: ["Engineer", "Intern", "I would not like to add another team member"]
        },  

    ]).then(function(response){
        // if user chooses engineer, run engineer question function
        if(response.newMember === "Engineer"){
            engineerQuestions();
            // if user chooses intern, run intern questions function
        }else if (response.newMember === "Intern"){
            internQuestions();
        }else{
            // if user chooses they would not like to add anymore team members, create HTML page
            console.log("Team Profile Successfully Generated!")
            fs.writeFileSync(outputPath, render(teamMembers), function(error){
            console.log(error)
        });
        }
    });
}


// questions for engineer team member
function engineerQuestions(){
inquirer.prompt([
    {
    type: "input",
    name: "engineerName",
    message: "What is your engineer's name?"
    },
    {
    type: "input",
    name: "engineerID",
    message: "What is your engineer's id number?"
    },
    {
    type: "input",
    name: "engineerEmail",
    message: "What is your engineer's email?"
    },
    {
    type: "input",
    name: "engineerUsername",
    message: "What is your engineer's Git Hub username?"
    }
    ]).then(function(response){
        let engineer= new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerUsername)
        // addes engineer object to teamMembers array
        teamMembers.push(engineer)
        // ask if user wants to add more team members
        createTeamQuestions();

    });

}

// questions for intern team member
function internQuestions(){

inquirer.prompt([
        {
        type: "input",
        name: "internName",
        message: "What is your intern's name?"
        },
        {
        type: "input",
        name: "internID",
        message: "What is your intern's id number?"
        },
        {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?"
        },
        {
        type: "input",
        name: "internSchool",
        message: "What school is your intern currently attending?"
        }
        ]).then(function(response){
        let intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool)
        // adds intern object to team members array
        teamMembers.push(intern)
        // ask if user wants to add more team members
        createTeamQuestions();

        });

    }


























