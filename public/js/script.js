document.addEventListener("DOMContentLoaded", () => {
    // === Filtro por categoría ===
    const botonesFiltro = document.querySelectorAll(".filtro");
    const cards = document.querySelectorAll(".col[data-categoria]");
  
    botonesFiltro.forEach(boton => {
      boton.addEventListener("click", () => {
        const filtro = boton.getAttribute("data-filtro");
  
        cards.forEach(card => {
          const categoria = card.getAttribute("data-categoria");
          card.style.display = (filtro === "todos" || categoria === filtro) ? "block" : "none";
        });
      });
    });
  
    // === Redirigir al hacer clic en la card ===
    document.querySelectorAll(".servicio-card").forEach(card => {
      card.addEventListener("click", () => {
        const tipo = card.dataset.tipo;
        window.location.href = `views/usuarios/detalleDeServicio.html?tipo=${tipo}`;
      });
    });
  
    // === Validación de formulario de contacto ===
    const formContacto = document.querySelector("#contactForm");
    const mensajeExito = document.querySelector("#mensajeEnviado");
  
    if (formContacto) {
      formContacto.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();
        const mensaje = document.querySelector("#mensaje").value.trim();
  
        if (!nombre || !email || !mensaje) {
          alert("Por favor, completa todos los campos antes de enviar.");
          return;
        }
  
        mensajeExito.classList.remove("d-none");
        formContacto.reset();
      });
    }
  });
  