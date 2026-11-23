const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const playersRoutes = require("./routes/playersRoutes");

const app = express();

// Conexión a MongoDB
connectDB();

// Middleware para leer JSON en las peticiones
app.use(express.json());

// Servir el frontend (index.html, CSS, JS) desde Express
app.use(express.static(path.join(__dirname, "../frontend")));

// Rutas de la API
app.use("/api/players", playersRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
