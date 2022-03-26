const inquirer = require('inquirer');
const fs = require('fs');

const employeecard = require ('./employeecard');
const Manager = require ('./lib/manager');
const Engineer = require ('./lib/engineer');
const intern = require('./lib/intern');
const theTeam = [];

function managerInit() {
 inquirer
 .prompt([
     {
         type: 'input',
         name: 'name',
         message: 'What is the managers first and last name?'
         Validate: input => {
             if (input) {
                 return true;
             } else {
                 console.log ("Enter the managers name to continue.");
                 return false;
             }
         }
     },
     {
        type: 'input',
        name: 'id',
        message: 'What is the managers ID number?'
        Validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Enter the managers ID number to continue.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the managers email?'
        Validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Enter the managers email to continue.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?'
        Validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Enter the managers office number to continue.");
                return false;
            }
        }
    },
 ])
 .then((managerresponses) =>{
     const { name, id, email, officeNumber} = managerresponses;
     const manager = new Manager(name, id, email, officeNumber);
     theTeam.push(manager);
     console.log("Welcome" + managerresponses.name + "!Avenger Assemble.");
     employeeInit();
 });

},
