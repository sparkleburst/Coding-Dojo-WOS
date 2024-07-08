-- Insert Query Syntax

-- INSERT INTO <tablename> (<column1>, <column2>, etc.)
-- VALUES (<value1>, <value2>);

INSERT INTO users (first_name, last_name, email)
VALUES ("Max", "Gilhespy", "max@example.com");

-- Select Query Syntax

-- SELECT (<column1>, <column2>, etc.(* if you want all the colums returned) FROM <tablename>

-- gets all users
SELECT * FROM users;users

-- gets specific user
SELECT * FROM users WHERE id = 1;

-- gets specific colums from all users
SELECT last_name, email FROM users;

-- Update Query Syntax

-- UPDATE <tablename>
-- SET
-- <column1> = <value1>,
-- <column2> = <value2>,
-- <column3> = <value3>
-- WHERE id = <id>;

UPDATE users
SET
first_name = "Maxi"
WHERE id = 1;

-- Delete Query Syntax

-- DELETE from <tablename>
-- WHERE id = <id>;

DELETE from users WHERE id = 1;




