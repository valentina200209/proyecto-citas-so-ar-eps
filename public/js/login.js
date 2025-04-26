document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registroForm = document.getElementById("registroForm");

  // LOGIN
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      try {
        const response = await fetch("http://localhost:3000/usuarios/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ correo: email, contrasena: password }),
        });

        const data = await response.json();

        if (response.ok) {
          alert(`Bienvenido/a ${data.nombre} como ${data.rol}`);
          if (data.rol === "funcionario") {
            window.location.href = "/citas/listaCita";
          } else {
            window.location.href = "/usuarios/perfil";
          }
        } else {
          alert(data.error || data.message);

        }
      } catch (error) {
        console.error("Error en login:", error);
        alert("Ocurrió un error al iniciar sesión.");
      }
    });
  }

  // REGISTRO
  if (registroForm) {
    registroForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nombre = document.getElementById("registroNombre").value.trim();
      const correo = document.getElementById("registroEmail").value.trim();
      const contrasena = document.getElementById("registroPassword").value.trim();
      const rol = document.getElementById("registroRol").value;

      // Validación de campos
      if (!nombre || !correo || !contrasena || !rol) {
        alert("Por favor completa todos los campos del registro.");
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/usuarios/registrar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nombre, correo, contrasena, rol }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Usuario registrado correctamente. Ya puedes iniciar sesión.");
          registroForm.reset();
          const modalElement = document.getElementById("registroModal");
          const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
          modal.hide();
          
          modal.hide();
        } else {
          alert(data.error || data.message);

        }
      } catch (error) {
        console.error("Error en registro:", error);
        alert("Ocurrió un error al registrar.");
      }
    });
  }
});
