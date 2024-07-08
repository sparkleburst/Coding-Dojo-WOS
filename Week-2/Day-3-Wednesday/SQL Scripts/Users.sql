-- This is so we can check the users table
SELECT * FROM users_schema.users;

-- This is to insert 3 new rows of information into the users table (create 3 new users)
INSERT INTO users (first_name, last_name, email)
VALUES ("Spongebob","Squarepants","sponge@bob.com"),
	   ("Squidward","Tentacles","squid@tent.com"),
	   ("Patrick","Star","pat@star.com");
       
-- Retrieve all the users
SELECT * 
FROM users;

-- Retrieve the first user using their email address
SELECT * 
FROM users WHERE email = "sponge@bob,com";

-- Retrieve the last user using their id
SELECT * FROM users 
WHERE id = 3;

-- Change the user with id = 3 so their last name is Pancakes
UPDATE users
SET
last_name = "Pancakes"
WHERE id = 3;

DELETE FROM users 
WHERE id = 2;

SELECT *
FROM users
ORDER BY first_name;

SELECT *
FROM users
ORDER BY first_name DESC;
