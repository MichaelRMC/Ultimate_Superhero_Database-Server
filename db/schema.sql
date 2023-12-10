DROP DATABASE IF EXISTS superhero_dev;
CREATE DATABASE superhero_dev;

\c superhero_dev;

CREATE TABLE superhero (
	id SERIAL PRIMARY KEY,
	image TEXT,
	name TEXT,
	fullName TEXT,
	location TEXT,
	intelligence INT,
	strength INT,
	speed INT,
	durability INT,
	power INT,
	combat INT,
	connections TEXT
);