INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Pizza Burger', FALSE);

INSERT INTO customers(customer_name) VALUES("Joey");
INSERT INTO customers(customer_name) VALUES("Jack");
INSERT INTO customers(customer_name) VALUES("Liang");
INSERT INTO customers(customer_name) VALUES("May");

INSERT INTO dining_records(customer_id, burger_id, number_eaten) VALUES (1, 1, 3);
INSERT INTO dining_records(customer_id, burger_id, number_eaten) VALUES (1, 2, 4);
INSERT INTO dining_records(customer_id, burger_id, number_eaten) VALUES (1, 3, 4);