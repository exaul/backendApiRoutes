const exp = require("express");

const rutas = exp.Router();

const Jugadores = [
  {
    id: "1",
    Nombre: "Haaland",
    Equipo: "M.City",
  },
  {
    id: "2",
    Nombre: "Messi",
    Equipo: "PSG",
  },
  {
    id: "3",
    Nombre: "vinicius",
    Equipo: "R.Madrid",
  },
];
rutas.get("/", (req, res, next) => {
  res.json({ jugadore: Jugadores });
});
rutas.get("/:pid", (req, res, next) => {
  const jugadore = Jugadores.find((p) => {
    return p.id === req.params.pid;
  });
  res.json({ jugadore });
});

module.exports = rutas;