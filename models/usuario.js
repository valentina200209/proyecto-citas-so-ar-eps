const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  rol: { type: String, enum: ["usuario", "funcionario"], required: true }
});

module.exports = mongoose.model("Usuario", usuarioSchema);
