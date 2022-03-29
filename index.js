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
         message: 'What is the managers first and last name?',
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
        message: 'What is the managers ID number?',
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
        message: 'What is the managers email?',
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
        message: 'What is the managers office number?',
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
     console.log("Welcome "  + managerresponses.name + "! Let's create your team.");
     employeeInit();
 });

};

function employeeInit() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee first and last name?',
            Validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("Enter the employees name to continue.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employees ID number?',
            Validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("Enter the employees ID number to continue.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employees email?',
            Validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("Enter the employees email to continue.");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'job',
            message: 'What is the employees job?',
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the employees school name?',
            When: (input) => input.job == "Intern",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("Enter the interns school name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employees github username?',
            When: (input) => input.job == "Engineer",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("Enter the employees github username.");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'addEmployee',
            message: 'Are there any additional employees?',
            choices: ['yes', 'no']
        },
    ])
        
.then ((employeeData) => {
    const {name, id, email, job, github, school, addEmployee} = employeeData;
    let employee;
    
    if (job == "Engineer"){
        employee = new Engineer(name, id, email, github);

        console.log(employee);

    } else if (job == "Intern") {
        employee = new intern(name, id, email, school);
        
        console.log(employee);

    }
    
    theTeam.push(employee);
    if (addEmployee == 'yes'){
        employeeInit();

    } else{
        createTeam();
    }
})
};

const writeFile = data => {
    fs.writeFile('./index.html', data, err =>{
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The avengers have been succesfully assembled!")
        }
    })
};
managerInit()
function createTeam() {
    console.log(theTeam);
    const newHTML = employeecard(createTeam);
    writeFile(newHTML)
}
