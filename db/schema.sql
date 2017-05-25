CREATE DATABASE IF NOT EXISTS sequelizedburger;
USE sequelizedburger;

/* If the table already exists, remove it before trying to create the table again*/
DROP TABLE IF EXISTS dining_records;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS burgers;

# Create the burgers table
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);



/* Create the customers table */
CREATE TABLE customers (
id int NOT NULL AUTO_INCREMENT,
customer_name varchar(255) NOT NULL,
PRIMARY KEY (id)
);




CREATE TABLE dining_records (
id int NOT NULL AUTO_INCREMENT,
customer_id INT,
burger_id INT,
number_eaten INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (customer_id)
	REFERENCES customers(id)
    ON DELETE CASCADE,
FOREIGN KEY (burger_id)
	REFERENCES burgers(id)
    ON DELETE CASCADE
);
