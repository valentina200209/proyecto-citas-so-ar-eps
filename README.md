README - Soñar EPS - Sistema de Gestión de Citas

Soñar EPS. Esta es una aplicación web en desarrollo que permite a los usuarios registrarse, iniciar sesión y gestionar sus citas médicas. El sistema está en constante mejora, tanto en su funcionalidad como en su diseño visual.


app.js: Archivo principal que pone en marcha el servidor y conecta con la base de datos.

models/: Aquí se define cómo luce cada dato en la base de datos, por ejemplo los usuarios y las citas.

controllers/: Contiene la lógica de las acciones, como iniciar sesión, registrar usuarios o agendar citas.

routers/: Define las rutas del sistema, indicando qué debe pasar cuando el usuario visita una URL específica.

views/: Contiene las vistas (páginas web) que ve el usuario. Están hechas en EJS.

public/: Carpeta con archivos estáticos como estilos CSS o scripts de JavaScript.

Estado actual del proyecto

Ya es posible registrarse, iniciar sesión y ver páginas básicas.

El inicio de sesión diferencia entre roles (usuario o funcionario), pero aún falta implementar completamente qué puede hacer cada uno.

El diseño visual aún se encuentra en proceso de mejora para ofrecer una mejor experiencia al usuario.

ejecutar 
tener instalado Node.js y MongoDB.

Descarga o clona el proyecto desde GitHub.

Abre una terminal dentro de la carpeta del proyecto.

Ejecuta npm install para instalar todas las dependencias.

Crea un archivo llamado .env en la raíz del proyecto y añade lo siguiente:

ini
Copy
Edit
PORT=3000
MONGODB_URI=mongodb://localhost:27017/soñar_eps
Luego ejecuta node app.js para iniciar el servidor.

Abre tu navegador en http://localhost:3000 para ver la aplicación funcionando.

