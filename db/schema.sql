DROP DATABASE IF EXISTS superhero_dev;
CREATE DATABASE superhero_dev;

\c superhero_dev;

DROP TABLE IF EXISTS superhero;

CREATE TABLE superhero (
	id SERIAL PRIMARY KEY,
	image TEXT,
	name TEXT,
	fullname TEXT,
	location TEXT,
	intelligence INT,
	strength INT,
	speed INT,
	durability INT,
	power INT,
	combat INT,
	connections TEXT,
	ON DELETE CASCADE
);