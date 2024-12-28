USE basics;

-- Drop the existing usc table
DROP TABLE IF EXISTS usc;

-- Recreate the usc table with the correct schema
CREATE TABLE IF NOT EXISTS usc (
    id VARCHAR(50) ,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);


