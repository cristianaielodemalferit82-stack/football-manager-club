const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Servidor Football Manager Club funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
