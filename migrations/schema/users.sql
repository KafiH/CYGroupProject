CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    fname VARCHAR(100),
    lName VARCHAR(100),
    uName VARCHAR(100),
    email VARCHAR(100),
    pswrd   VARCHAR(100)
);
CREATE TABLE userScore (
    id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    userScore INT PRIMARY KEY
);