CREATE DATABASE Todoproject;

CREATE TABLE todo_lists(
    todo_id  SERIAL PRIMARY KEY ,
    todo_describ varchar(255) NOT NULL,
    todo_start DATE ,
    todo_end DATE ,
    todo_status varchar(50)
);

CREATE TABLE users(
    id NOT NULL AUTO_INCREMENT,
    username varchar(100),
    email varchar(100),
    password TEXT,
    PRIMARY KEY(id)
)

