const express = require("express");
const cors = require("cors");

const app = express();
const superhero = require("../Ultimate_Superhero_Database-Server/controllers/superhero")

app.use(cors());
app.use( express.json() );
app.use("/superhero", superhero)

app.get("/", (req, res) => {
	res.send("Welcome to Ultimate Superhero Database");
});

app.get("*", (req, res) => {
	res.status(404).send("Page Not Found!");
});

module.exports = app;
