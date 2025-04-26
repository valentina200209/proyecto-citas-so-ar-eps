const express = require("express");
const router = express.Router();

// Mostrar lista de citas
router.get("/", (req, res) => {
  // Si existe un error, lo pasamos a la vista
  const error = req.query.error;
  res.render("citas/listaCita", { error: error });
});

// Crear nueva cita
router.get("/crear", (req, res) => {
  res.render("citas/crearCita");
});

// Editar cita
router.get("/editar", (req, res) => {
  res.render("citas/editarCita");
});

// Mostrar index
router.get("/inicio", (req, res) => {
  res.render("index");
});

module.exports = router;
