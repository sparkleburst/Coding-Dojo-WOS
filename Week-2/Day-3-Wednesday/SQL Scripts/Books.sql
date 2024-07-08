                 -- This is to insert 5 authors into the authors table
INSERT INTO authors (name)
VALUES ("Jane Austin"),
	   ("Emily Dickenson"),
	   ("Fyodor Dostoevsky"),
       ("William Shakespear"),
       ("Lau Tzu");
       
-- This is so we can check the authors table
SELECT * FROM books_schema.authors;

-- This is to insert 5 books into the books table
INSERT INTO books (title)
VALUES ("C Sharp"),
	   ("Java"),
	   ("Python"),
       ("PHP"),
       ("Ruby");
       
-- This is so we can check the books table
SELECT * FROM books_schema.books;

-- Change the name of the C Sharp book to C#

UPDATE books
SET
title = "C#"
WHERE id = 1;

-- We can update the title using 'WHERE title =' if we get out of safe update mode
-- Then we do not HAVE to use 'WHERE id ='
-- Start example:

-- Disable safe updates mode                            
SET SQL_SAFE_UPDATES = 0;

-- Make the update
UPDATE books
SET
title = "Another one of those 'C' languages!"
WHERE title = "C#";

-- Re-enable safe updates mode
SET SQL_SAFE_UPDATES = 1;

-- End example

-- Change the first name of the fourth author to 'Bill'

UPDATE authors
SET
name = "Bill Shakespear"
where id = 4;

-- This is so we can check the favorites table
SELECT * FROM books_schema.favorites;

-- Have the first author favorite the first 2 books

INSERT INTO favorites (author_id, book_id)
VALUES (1, 1),
	   (1, 2);
       
-- Have the second author favorite the first 3 books

INSERT INTO favorites (author_id, book_id)
VALUES (2, 1),
       (2, 2),
	   (2, 3);

-- Have the third author favorite the first 4 books

INSERT INTO favorites (author_id, book_id)
VALUES (3, 1),
       (3, 2),
       (3, 3),
	   (3, 4);
 
-- Have the fourth author favorite the all the books

INSERT INTO favorites (author_id, book_id)
VALUES (4, 1),
       (4, 2),
       (4, 3),
       (4, 4),
	   (4, 5);
 
-- Retrieve all the authors who favorited the 3rd book

SELECT * FROM favorites
JOIN authors ON authors.id = favorites.author_id
WHERE book_id = 3;

-- Remove the first author of the 3rd book's favorites

-- Retrieve the ID of the first author who favorited the 3rd book
SELECT author_id FROM favorites
WHERE book_id = 3
ORDER BY author_id
LIMIT 1;

-- Use the retrieved author_id to delete the record from the favorites table
DELETE FROM favorites
WHERE book_id = 3
AND author_id = (
	SELECT author_id 
    FROM (
    SELECT author_id
    FROM favorites 
    WHERE book_id = 3 
    ORDER BY author_id 
    LIMIT 1
    ) AS temp_table
);

-- Add the 5th author as an author who favorited the 2nd book
INSERT INTO favorites (author_id, book_id)
VALUES (5, 2);

-- Find all books that the third author favorited

SELECT * FROM favorites
JOIN books 
ON books.id = favorites.book_id
WHERE author_id = 3;                                                         

-- Find all the authors that favorited the 5th book

SELECT * FROM favorites
JOIN authors ON authors.id = favorites.author_id
WHERE book_id = 5;