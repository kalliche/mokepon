const express = require("express");

const app = express();

//reponder a las peticiones
app.get("/", (req, res) => {
    res.send("hola");
});

// arrancar servidor y escuche por un puerto
app.listen(8080, () => {
    console.log('Servidor funcionando');
});