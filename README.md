# 🎮 Tienda de Videojuegos - SPA con React Router

## 📌 Descripción del proyecto

Este proyecto fue desarrollado como parte del taller “Formularios y Navegación SPA (Single Page Application)”, utilizando React + Vite + React Router DOM.

La aplicación simula una tienda de videojuegos donde se puede gestionar un inventario completo mediante operaciones CRUD:

- ➕ Crear videojuegos
- ✏️ Editar videojuegos
- ❌ Eliminar videojuegos
- 📋 Listar videojuegos

Toda la lógica del estado se maneja de forma centralizada en App.jsx.

---

## 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- CSS
- Hooks: useState, useLocation, useNavigate

---

## 📂 Estructura del proyecto

src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── FormularioVideojuego.jsx
│   ├── TablaVideojuegos.jsx
│   └── PaginaNoEncontrada.jsx
│
├── App.jsx
├── main.jsx
└── App.css

---

## ⚙️ Instalación del proyecto

Clona el repositorio:

git clone https://github.com/HancelE93/VideoJuego.git 

Entra a la carpeta:

cd tienda-videojuegos

Instala dependencias:

npm install

Instala React Router DOM:

npm install react-router-dom

Ejecuta el proyecto:

npm run dev

---

## 🧠 Funcionalidades

📋 Listar videojuegos
- Muestra todos los videojuegos en una tabla
- Datos manejados con estado (useState)

➕ Crear videojuego
- Formulario con inputs (text, select, checkbox)
- Permite agregar nuevos videojuegos

✏️ Editar videojuego
- Precarga datos en el formulario
- Permite modificar y guardar cambios

❌ Eliminar videojuego
- Elimina registros de la tabla en tiempo real

🌐 Navegación SPA (React Router DOM)

Rutas:
- / → Lista de videojuegos
- /nuevo → Crear videojuego
- /editar/:id → Editar videojuego
- * → Página 404

---

## 🧭 Navegación

Incluye un Navbar para moverse entre páginas sin recargar la página.

---



## 🧪 Flujo del sistema

1. Crear videojuego
2. Verlo en la tabla
3. Editarlo
4. Guardar cambios
5. Eliminar si es necesario

---

## 👨‍💻 Autor

Hancel Espin  
Proyecto académico - React SPA CRUD  
Ecuador

---

## ⭐ Nota

Este proyecto fue desarrollado para practicar:

- React Router DOM
- CRUD en React
- Manejo de estado con useState
- SPA sin recargar la página