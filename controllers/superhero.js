const express = require("express");
const {
	getAllSuperheroes,
	getSuperhero,
	createSuperhero,
	deleteSuperhero,
	updateSuperhero,
} = require("../queries/superhero.js");

const superhero = express.Router();

superhero.get("/:id", async (req, res) => {
	const { id } = req.params;
	const oneSuperhero = await getSuperhero(id);
	if (oneSuperhero) {
		res.json(oneSuperhero);
	} else {
		res.status(404).json({ error: "Not Found!" });
	}
});
superhero.get("/", async (req, res) => {
	const allSuperheroes = await getAllSuperheroes();
	if (allSuperheroes[0]) {
		res.status(200).json(allSuperheroes);
	} else {
		res.status(500).json({
			success: false,
			data: { error: "Server Error!" },
		});
	}
})

superhero.post("/", async (req, res) => {
	try {
		const createdSuperhero = await createSuperhero(req.body);
		res.json(createdSuperhero);
	} catch (error) {
		res.status(400).json({ error: "I'm Sorry. An error has occurred!" });
	}
});

superhero.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deletedSuperhero = await deleteSuperhero(id);
		if (deletedSuperhero) {
			res
				.status(200)
				.json({ success: true, payload: { data: deletedSuperhero } });
		} else {
			res.status(404).json("Superhero does not exist!");
		}
	} catch (error) {
		res.send(error);
	}
});

superhero.put("/:id", async (req, res) => {
	const { id } = req.params;
	const updatedSuperhero = await updateSuperhero(id, req.body);
	if (updatedSuperhero.id) {
		res.status(200).json(updatedSuperhero);
	} else res.status(404).json("No such superhero was found with that id!");
});

module.exports = superhero;
