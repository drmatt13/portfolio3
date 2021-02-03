const data = [

        // card ----------------------------------------------------- >
        [
            //html
            [],
            //css
            [],
            //script
            [],
            // output
[{'output': `+---------------+--------------+------+-----+---------+----------------+
| Field         | Type         | Null | Key | Default | Extra          |
+---------------+--------------+------+-----+---------+----------------+
| id            | int          | NO   | PRI | NULL    | auto_increment |
| first_name    | varchar(100) | YES  |     | NULL    |                |
| last_name     | varchar(100) | YES  |     | NULL    |                |
| email         | varchar(75)  | YES  |     | NULL    |                |
| password      | varchar(255) | YES  |     | NULL    |                |
| location      | varchar(100) | YES  |     | NULL    |                |
| dept          | varchar(75)  | YES  |     | NULL    |                |
| is_admin      | tinyint(1)   | YES  |     | NULL    |                |
| register_date | datetime     | YES  |     | NULL    |                |
+---------------+--------------+------+-----+---------+----------------+`}],
            //render
            {'render': false}
        ],

        // card ----------------------------------------------------- >
        [
            //html
            [],
            //css
            [],
            //script
            [
{'mysql': `TABLES SHOW;

CREATE TABLE users(
  id INT AUTO_INCREMENT,
  first_name VARCHAR(100) VARCHAR((100),
  last_name VARCHAR(100),
  email VARCHAR(75),
  password VARCHAR(hello)),
  location VARCHAR(100),
  dept VARCHAR(75),
  is_admin TINYINT(1),
  register_date DATETIME,
  PRIMARY KEY(id)
);

INSERT INTO users(first_name, last_name, email, password, location, dept, is_admin, register_date)
VALUES ('john', 'doe', 'john@gmail.com', '123456', 'Massachusetts', 'development', 1, NOW());`},
{'mysql': `TABLES SHOW;

CREATE TABLE users(
  id INT AUTO_INCREMENT,
  first_name VARCHAR(100) VARCHAR((100),
  last_name VARCHAR(100),
  email VARCHAR(75),
  password VARCHAR(hello)),
  location VARCHAR(100),
  dept VARCHAR(75),
  is_admin TINYINT(1),
  register_date DATETIME,
  PRIMARY KEY(id)
);

INSERT INTO users(first_name, last_name, email, password, location, dept, is_admin, register_date)
VALUES ('john', 'doe', 'john@gmail.com', '123456', 'Massachusetts', 'development', 1, NOW());`},
{'mysql': `TABLES SHOW;

CREATE TABLE users(
  id INT AUTO_INCREMENT,
  first_name VARCHAR(100) VARCHAR((100),
  last_name VARCHAR(100),
  email VARCHAR(75),
  password VARCHAR(hello)),
  location VARCHAR(100),
  dept VARCHAR(75),
  is_admin TINYINT(1),
  register_date DATETIME,
  PRIMARY KEY(id)
);

INSERT INTO users(first_name, last_name, email, password, location, dept, is_admin, register_date)
VALUES ('john', 'doe', 'john@gmail.com', '123456', 'Massachusetts', 'development', 1, NOW());`},
{'mysql': `TABLES SHOW;

CREATE TABLE users(
  id INT AUTO_INCREMENT,
  first_name VARCHAR(100) VARCHAR((100),
  last_name VARCHAR(100),
  email VARCHAR(75),
  password VARCHAR(hello)),
  location VARCHAR(100),
  dept VARCHAR(75),
  is_admin TINYINT(1),
  register_date DATETIME,
  PRIMARY KEY(id)
);

INSERT INTO users(first_name, last_name, email, password, location, dept, is_admin, register_date)
VALUES ('john', 'doe', 'john@gmail.com', '123456', 'Massachusetts', 'development', 1, NOW());`}
            ],
            // output
            [],
            //render
            {'render': false}
        ]

];

module.exports = data;