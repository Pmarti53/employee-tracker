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

// function mainPrompt() {
//     inquirer.prompt({
//         name: "WhatDo",
//         type: "rawlist",
//         Message: "What would you like to do?",
//         choices: [
//             {
//                 name: "Add Department",
//                 value: "Add_Department"
//             },
//             {
//                 name: "Add Title",
//                 value: "Add_Title"
//             },
//             {
//                 name: "Add Employee",
//                 value: "Add_Employee"
//             },
//             {
//                 name: "View All Departments",
//                 value: "View_Departments"
//             },
//             {
//                 name: "View All Titles",
//                 value: "View_Titles"
//             },
//             {
//                 name: "View All Employees",
//                 value: "View_Employees"
//             }
//         ]
//     })

// };










app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // mainPrompt();
});