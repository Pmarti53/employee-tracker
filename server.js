const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'MySQL12!',
        database: 'manager'
    },
    console.log('Connected to the manager database.')
);





app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});