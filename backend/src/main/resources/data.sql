CREATE TABLE users
(
    `username` varchar(60) default null,
    `password` varchar(68) default null,
    `enabled` BOOLEAN NOT NULL,
    PRIMARY KEY (`username`)
);

CREATE TABLE roles
(
    `username` varchar(60) default null,
    `role` varchar(68) default null,
    FOREIGN KEY (username) REFERENCES users(username)
);

CREATE TABLE IF NOT EXISTS stations
(
    id          VARCHAR(32),
    empty_slots INT,
    address     VARCHAR(100),
    status      VARCHAR(10),
    uid         INT,
    free_bikes  INT,
    latitude    DECIMAL(9, 6),
    longitude   DECIMAL(9, 6),
    name        VARCHAR(100),
    timestamp   TIMESTAMP
);

INSERT INTO users (username, password, enabled) VALUES ('yoram', '{bcrypt}$2a$12$SlrtuHCC3nbbyenOKJhIr.J8PVBALAQGHNuoTa4l6dP3Ts/phtw8O', true);
INSERT INTO roles (username, role) VALUES ('yoram', 'USER');


