DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE DATABASE burgers_db;

CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255),
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);