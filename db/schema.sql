DROP DATABASE IF EXISTS manager;



CREATE TABLE Department (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    dept_name VARCHAR(20) NOT NULL UNIQUE,
);

CREATE TABLE Role (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER AUTO_INCREMENT NOT NULL,
);

CREATE TABLE Employee (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER
);
    

