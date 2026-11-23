const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    apellidos: { type: String, required: true, trim: true },
    edad: { type: Number, min: 5, max: 60 },
    dorsal: { type: Number, required: true, min: 1, max: 99 },
    posicion: {
      type: String,
      required: true,
      enum: ["Portero", "Defensa", "Centrocampista", "Delantero"],
    },
    equipo: { type: String, trim: true },
    nacionalidad: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
