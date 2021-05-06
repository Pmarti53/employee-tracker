INSERT INTO Department (id, dept_name)
    VALUES
        (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");

INSERT INTO Role (id, title, salary, department_id)
    VALUES
    (1, "Sales Lead" , 40000, 1),
    (2, "Salesperson", 25000, 1),
    (3, "Lead Engineer", 100000, 2),
    (4, "Software Engineer", 70000, 2),
    (5, "Account Manager", 100000, 3),
    (6, "Accountant", 90000, 3),
    (7, "Legal Team Lead", 250000, 4),
    (8, "Lawyer", 190000, 4);

INSERT INTO Manager (id, first_name, last_name)
    VALUES
        (1, 'Brett', 'Favre'),
        (2,'Pennington', 'Chad'),
        (3, 'Mark', 'Brunell'),
        (4, 'Boomer', 'Esiason');


INSERT INTO Employee (id, first_name, last_name, role_id, manager_id)
    VALUES
    (1, 'Chad', 'Pennington', 1, 1),
    (2, 'Doug', 'Flutie', 2, 2),
    (3, 'Brett', 'Favre', 3, 0),
    (4, 'Peyton', 'Manning', 4, 1),
    (5, 'Mark', 'Brunell', 5, 0),
    (6, 'Steve', 'McNair', 6, 0),
    (7, 'Boomer', 'Esiason', 7, 3),
    (8, 'Dante', 'Culpepper', 9, 4);





