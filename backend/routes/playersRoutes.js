const express = require("express");
const Player = require("../models/Player");

const router = express.Router();

// GET /api/players -> lista de jugadores
router.get("/", async (req, res) => {
  try {
    const players = await Player.find().sort({ dorsal: 1 });
    res.json(players);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los jugadores" });
  }
});

// GET /api/players/:id -> un jugador
router.get("/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ mensaje: "Jugador no encontrado" });
    res.json(player);
  } catch (error) {
    res.status(400).json({ mensaje: "ID no válido" });
  }
});

// POST /api/players -> añadir jugador
router.post("/", async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ mensaje: "Datos no válidos", detalle: error.message });
  }
});

// PUT /api/players/:id -> actualizar jugador
router.put("/:id", async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!player) return res.status(404).json({ mensaje: "Jugador no encontrado" });
    res.json(player);
  } catch (error) {
    res.status(400).json({ mensaje: "Datos no válidos", detalle: error.message });
  }
});

// DELETE /api/players/:id -> eliminar jugador
router.delete("/:id", async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    if (!player) return res.status(404).json({ mensaje: "Jugador no encontrado" });
    res.json({ mensaje: "Jugador eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "ID no válido" });
  }
});

module.exports = router;
