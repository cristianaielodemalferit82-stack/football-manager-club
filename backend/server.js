const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Servidor Football Manager Club funcionando");
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
