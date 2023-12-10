const db = require("../db/dbConfig.js");

const getAllSuperheroes = async () => {
	try {
		const superheroes = await db.any("SELECT * FROM superhero");
		return superheroes;
	} catch (error) {
		return error;
	}
};

const getSuperhero = async (id) => {
	try {
		const oneSuperhero = await db.one(
			"SELECT * FROM superhero WHERE id=$1",
			id
		);
		return oneSuperhero;
	} catch (error) {
		return error;
	}
};

const createSuperhero = async (superhero) => {
	try {
		const { image, name, connections } = superhero;
		const newSuperhero = db.one(
			"INSERT INTO superhero ( image, name, connections) VALUES ($1, $2, $3 ) RETURNING *",
			[image, name, connections]
		);
		return newSuperhero;
	} catch (error) {
		console.log(error);
	}
};

const deleteSuperhero = async (id) => {
	try {
		const deletedSuperhero = await db.one(
			"DELETE from superhero WHERE id = $1 RETURNING *",
			id
		);
		return deletedSuperhero;
	} catch (error) {
		return error;
	}
};

const updateSuperhero = async (id, superhero) => {
	try {
		const { image, name, connections } = superhero;
		const updatedSuperhero = await db.one(
			"UPDATE teams SET image=$1, name=$2, connections=$3 WHERE id=$4 RETURNING *",
			[image, name, connections, id]
		);
		return updatedSuperhero;
	} catch (error) {
		return error;
	}
};
module.exports = {
	getAllSuperheroes,
	getSuperhero,
	createSuperhero,
	deleteSuperhero,
	updateSuperhero,
};
