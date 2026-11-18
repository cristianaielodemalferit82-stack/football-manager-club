const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Lista de jugadores");
});

router.post("/", (req, res) => {
    res.send("Jugador añadido");
});

router.put("/:id", (req, res) => {
    res.send("Jugador actualizado");
});

router.delete("/:id", (req, res) => {
    res.send("Jugador eliminado");
});

module.exports = router;
