DROP DATABASE IF EXISTS manager;

CREATE DATABASE manager;

USE manager;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    dept_name VARCHAR(20) NOT NULL UNIQUE,
);

-- CREATE TABLE Role (
    
-- )

