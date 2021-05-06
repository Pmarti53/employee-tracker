const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'MySQL12!',
        database: 'manager'
    },
    console.log('Connected to the manager database.'),
);

function mainPrompt() {
    inquirer.prompt({
        name: "WhatDo",
        type: "list",
        message: "What would you like to do?",

        choices: [
            {
                name: "View All Departments",
                value: "View_Departments"
            },
            {
                name: "View All Roles",
                value: "View_Roles"
            },
            {
                name: "View All Employees",
                value: "View_Employees"
            },
            {
                name: "Add Department",
                value: "Add_Department"
            },
            {
                name: "Add Role",
                value: "Add_Role"
            },
            {
                name: "Add Employee",
                value: "Add_Employee"
            }
        ]
    }).then(answer);

}

function answer({ WhatDo }) {
    switch (WhatDo) {
        case "View_Departments":
            viewDepts();
            break;

        case "View_Roles":
            viewRoles();
            break;

        case "View_Employees":
            viewEmpls();
            break;

        case "Add_Department":
            addDepts();
            break;

        case "Add_Role":
            addRole();
            break;

        case "Add_Employee":
            addEmpl();
            break;

        case "Exit":
        default:
            console.log('Bye');
            db.end();

    }
};

function viewDepts() {
    db.query(`SELECT * FROM Department`, (err, res)=>{
        console.log('Departments');
        
    });
};

function viewRoles() {
    db.query(`SELECT * FROM Role`, (err, res)=>{
        console.log('Roles');
    });
};

function viewEmpls() {
    db.query(`SELECT * FROM Employee`, (err, res)=>{
        console.log('Employees');
    });
}












app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mainPrompt();
});