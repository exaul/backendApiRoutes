const exp = require("express");

const ruta = exp.Router();

const Platillos = [
  {
    id: "1",
    Nombre: "Cafe de civeta",
    Precio: "205$ por kilogramo",
  },
  {
    id: "2",
    Nombre: "Jamón Ibérico de Bellota Albarragena",
    Precio: "350$ por kilogramo",
  },
  {
    id: "3",
    Nombre: "Entrecot de Wagyu",
    Precio: "Mil 100$ por kilogramo",
  },
];

ruta.get("/", (req, res, next) => {
  res.json({ comida: Platillos });
});
ruta.get("/:pid", (req, res, next) => {
  const comida = Platillos.find((p) => {
    return p.id === req.params.pid;
  });
  res.json({ comida });
});

module.exports = ruta;
