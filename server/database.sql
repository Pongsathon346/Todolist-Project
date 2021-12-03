CREATE DATABASE Todoproject;

CREATE TABLE todo_lists(
    todo_id  SERIAL PRIMARY KEY ,
    todo_describ varchar(255) NOT NULL,
    todo_start DATE ,
    todo_end DATE ,
    todo_status varchar(50),
    project_id INT references projects(project_id)
);

CREATE TABLE projects(
    project_id SERIAL PRIMARY KEY,
    project_name varchar(255) NOT NULL,
    project_description varchar(255) NOT NULL,
    project_createdat DATE NOT NULL,
    user_id INT references users(id)
);

CREATE TABLE users(
    id  SERIAL PRIMARY KEY ,
    username varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password TEXT 
);

SELECT * FROM user_lists;
