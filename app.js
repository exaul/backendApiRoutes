const express = require("express");

const placesRoutes = require("./routes/places-routes");
const rutaPaises = require("./routes/Paisesyciudades");
const rutaJugadores = require("./routes/JugadoresDeFutbol");
const rutaRestaurante = require("./routes/Restaurante");

const app = express();

app.use("/api/places", placesRoutes);
app.use("/api/paises", rutaPaises);
app.use("/api/jugadores", rutaJugadores);
app.use("/api/restaurante", rutaRestaurante);

app.listen(3000);
