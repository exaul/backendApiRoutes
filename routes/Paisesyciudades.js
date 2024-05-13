const express = require("express");
const routes = express.Router();

const PaisesyCiudades = [
  {
    id: "1",
    Pais: "Canada",
    Ciudad: "Otowwa",
  },
  {
    id: "2",
    Pais: "Mexico",
    Ciudad: "Mexico DF",
  },
  {
    id: "3",
    Pais: "Costa Rica",
    Ciudad: "San Jose",
  },
];
routes.get("/", (req, res, next) => {
  res.json({ paisesyc: PaisesyCiudades });
});
routes.get("/:pid", (req, res, next) => {
  const paisesyc = PaisesyCiudades.find((p) => {
    return p.id === req.params.pid;
  });
  res.json({ paisesyc });
});

module.exports = routes;
