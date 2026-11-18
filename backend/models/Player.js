const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    edad: Number,
    dorsal: Number,
    posicion: String,
    equipo: String,
    nacionalidad: String
});

module.exports = mongoose.model("Player", playerSchema);
