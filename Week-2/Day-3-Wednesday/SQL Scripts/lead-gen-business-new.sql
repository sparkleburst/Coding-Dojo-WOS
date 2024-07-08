-- Max Gilhespy

-- example given to us

SELECT Date, TotalAllowance 
FROM Calculation 
WHERE EmployeeId=1 
AND Date >= '2011/02/25' 
AND Date < '2011/02/28';

-- 1. What query would you run to get the total revenue for March of 2012?

SELECT DATE_FORMAT(billing.charged_datetime, '%M') AS month,
SUM(billing.amount) AS total_revenue
FROM billing
WHERE MONTH(billing.charged_datetime) = 3
AND YEAR(billing.charged_datetime) = 2012;

-- 2. What query would you run to get
-- total revenue collected from the client
-- with an id of 2?

SELECT clients.client_id,
SUM(billing.amount) AS total_revenue
FROM billing
JOIN clients ON clients.client_id = billing.client_id
WHERE billing.client_id = 2;

-- 3. What query would you run to get all
-- the sites that client=10 owns?

SELECT sites.domain_name AS website, sites.client_id
FROM sites
WHERE sites.client_id = 10;

-- 4a. What query would you run to get
-- total # of sites created per month per
-- year for the client with an id of 1?

SELECT sites.client_id, 
COUNT(sites.domain_name) AS number_of_websites, 
MONTHNAME(sites.created_datetime) AS month_created,
YEAR(sites.created_datetime) 
FROM sites
WHERE sites.client_id = 1
GROUP BY YEAR(sites.created_datetime), month_created
ORDER BY YEAR(sites.created_datetime), month_created;

-- 4b. What query would you run to get
-- total # of sites created per month per
-- year for client=20?

SELECT sites.client_id, 
COUNT(sites.domain_name) AS number_of_websites, 
MONTHNAME(sites.created_datetime) AS month_created,
YEAR(sites.created_datetime) 
FROM sites
WHERE sites.client_id = 20
GROUP BY YEAR(sites.created_datetime), month_created
ORDER BY YEAR(sites.created_datetime), month_created;

-- 5. What query would you run to get
-- the total # of leads generated for each
-- of the sites between January 1, 2011
-- to February 15, 2011?

SELECT sites.domain_name, 
COUNT(leads.site_id) AS number_of_leads
FROM sites
JOIN leads ON leads.site_id = sites.site_id
WHERE leads.registered_datetime >= '2011/01/01 00:00:00' 
AND leads.registered_datetime < '2011/02/16 00:00:00'
GROUP BY sites.domain_name;

-- 6. What query would you run to get a
-- list of client names and the total # of
-- leads we've generated for each of our
-- clients between January 1, 2011 to
-- December 31, 2011?

SELECT CONCAT(clients.first_name, ' ',clients.last_name) AS client,
COUNT(leads.site_id) AS number_of_leads
From clients
JOIN sites ON sites.client_id = clients.client_id
JOIN leads ON leads.site_id = sites.site_id
WHERE leads.registered_datetime >= '2011/01/01 00:00:00' 
AND leads.registered_datetime < '2012/01/01 00:00:00'
GROUP BY client;

-- 7. What query would you run to get a
-- list of client names and the total # of
-- leads we've generated for each client
-- each month between months 1 - 6 of
-- Year 2011?

SELECT CONCAT(clients.first_name, ' ',clients.last_name) AS client,
COUNT(leads.site_id) AS number_of_leads, 
MONTHNAME(leads.registered_datetime) AS month_generated 
From clients 
JOIN sites ON sites.client_id = clients.client_id
JOIN leads ON leads.site_id = sites.site_id
WHERE YEAR(leads.registered_datetime) = 2011 
AND MONTH(leads.registered_datetime) BETWEEN 1 AND 6
GROUP BY client, MONTH(sites.created_datetime)
ORDER BY MONTH(leads.registered_datetime);

-- 8a. What query would you run to get a
-- list of client names and the total # of
-- leads we've generated for each of our
-- clients' sites between January 1, 2011
-- to December 31, 2011? Order this
-- query by client id.

SELECT CONCAT(clients.first_name, ' ',clients.last_name) AS client,
sites.domain_name,
COUNT(leads.site_id) AS number_of_leads
FROM clients
JOIN sites ON sites.client_id = clients.client_id
JOIN leads ON leads.site_id = sites.site_id
WHERE leads.registered_datetime >= '2011/01/01 00:00:00' 
AND leads.registered_datetime < '2012/01/01 00:00:00'
GROUP BY clients.client_id, sites.domain_name 
ORDER BY clients.client_id;

-- 8b. Come up with a second query that
-- shows all the clients, the site name(s),
-- and the total number of leads
-- generated from each site for all time.

SELECT CONCAT(clients.first_name, ' ',clients.last_name) AS client,
sites.domain_name,
COUNT(leads.site_id) AS number_of_leads
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
LEFT JOIN leads ON leads.site_id = sites.site_id
GROUP BY clients.client_id, sites.domain_name 
ORDER BY clients.client_id;

-- 9a. Write a single query that retrieves
-- total revenue collected from each
-- client for each month of the year.
-- Order it by client id.
-- With month id

SELECT CONCAT(clients.first_name, ' ',clients.last_name) AS client,
SUM(billing.amount) AS total_revenue,
LPAD(MONTH(billing.charged_datetime), 2, '0') AS month_charged,
YEAR(billing.charged_datetime)
FROM clients
JOIN billing ON billing.client_id = clients.client_id
GROUP BY clients.client_id, 
MONTH(billing.charged_datetime), 
YEAR(billing.charged_datetime) 
ORDER BY clients.client_id, 
YEAR(billing.charged_datetime),
MONTH(billing.charged_datetime);

-- 9b. With month name

SELECT CONCAT(clients.first_name, ' ',clients.last_name) AS client,
SUM(billing.amount) AS total_revenue,
MONTHNAME(billing.charged_datetime) AS month_charged,
YEAR(billing.charged_datetime)
FROM clients
JOIN billing ON billing.client_id = clients.client_id
GROUP BY clients.client_id, 
MONTH(billing.charged_datetime), 
YEAR(billing.charged_datetime) 
ORDER BY clients.client_id, 
YEAR(billing.charged_datetime),
MONTH(billing.charged_datetime);

-- 10. Write a single query that retrieves
-- all the sites that each client owns.
-- Group the results so that each row
-- shows a new client. It will become
-- clearer when you add a new field
-- called 'sites' that has all the sites that
-- the client owns. (HINT: use
-- GROUP_CONCAT)

SELECT CONCAT(clients.first_name, ' ',clients.last_name) AS client_name,
GROUP_CONCAT(sites.domain_name SEPARATOR '/')
AS sites
FROM clients
LEFT JOIN sites ON sites.client_id = clients.client_id
GROUP BY clients.client_id, client_name;


