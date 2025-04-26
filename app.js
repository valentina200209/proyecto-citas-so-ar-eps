const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Conexión a MongoDB exitosa"))
.catch(err => console.error("❌ Error al conectar a MongoDB:", err));

// Rutas
const usuariosRouter = require("./routers/usuarios");
const citasRouter = require("./routers/citas");

app.use("/usuarios", usuariosRouter);
app.use("/citas", citasRouter);

// Ruta raíz
app.get("/", (req, res) => {
  res.render("index");
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
