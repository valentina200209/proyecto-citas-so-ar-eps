const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

// Mostrar formularios (vistas)
router.get("/login", (req, res) => {
  res.render("usuarios/login", { error: req.query.error });
});

router.get("/registro", (req, res) => {
  res.render("usuarios/registro");
});

router.get("/contacto", (req, res) => {
  res.render("usuarios/contacto");
});

router.get("/perfil", (req, res) => {
  res.render("usuarios/perfil");
});

// Procesar formularios (lógica de login y registro)
router.post("/login", usuariosController.loginUsuario);
router.post("/registrar", usuariosController.registrarUsuario);

module.exports = router;
