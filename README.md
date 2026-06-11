# 🎮 Tienda de Videojuegos SPA

## 📖 Descripción

Proyecto desarrollado con React y Vite como parte del taller **"Formularios Avanzados, Validaciones y Persistencia Local en SPA"**.

La aplicación permite administrar un catálogo de videojuegos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar), incorporando validaciones dinámicas, persistencia de datos con LocalStorage y una interfaz moderna optimizada mediante técnicas de UX/UI.

---

## 🚀 Funcionalidades Implementadas

### 📋 Gestión de Videojuegos

* Visualización de videojuegos en una tabla interactiva.
* Registro de nuevos videojuegos.
* Edición de videojuegos existentes.
* Eliminación de registros.
* Navegación SPA mediante React Router.

### 📝 Formulario Avanzado

Cada videojuego almacena:

* 🎮 Título
* 🏷️ Género
* 💻 Plataforma
* 💰 Precio
* 📅 Fecha de lanzamiento
* ⭐ Calificación de la crítica
* 📝 Sinopsis
* 📦 Disponibilidad
* 📊 Progreso completado
* 🖼️ Imagen de portada

### 🔒 Validaciones Dinámicas

El sistema valida automáticamente:

* El título no puede estar vacío.
* La sinopsis debe contener mínimo 10 caracteres.
* La calificación debe estar entre 1 y 100.
* No se permiten fechas futuras.
* Mensajes de error visuales en tiempo real.

### 💾 Persistencia con LocalStorage

Los videojuegos se almacenan automáticamente en el navegador utilizando LocalStorage.

Beneficios:

* Conserva los datos después de recargar la página.
* Mantiene los cambios realizados por el usuario.
* Simula persistencia sin necesidad de una base de datos.

### 🔔 Sistema de Notificaciones

Implementación de Toast Notifications para informar acciones exitosas:

* Videojuego agregado.
* Videojuego actualizado.
* Videojuego eliminado.

Las alertas desaparecen automáticamente después de 3 segundos.

### 🎨 Diseño Moderno

Se aplicaron mejoras visuales utilizando recomendaciones de Inteligencia Artificial:

* Interfaz responsiva.
* Inputs con efectos de enfoque (focus).
* Formularios modernos con bordes suaves.
* Tabla estilizada.
* Mensajes de error animados.
* Experiencia de usuario mejorada.

---

## 🛠️ Tecnologías Utilizadas

* React
* Vite
* React Router DOM
* JavaScript ES6+
* CSS3
* LocalStorage API

---

## 📂 Estructura del Proyecto

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── TablaVideojuegos.jsx
│   ├── FormularioVideojuego.jsx
│   ├── AlertaNotificacion.jsx
│   └── PaginaNoEncontrada.jsx
│
├── data/
│   └── videojuegos.js
│
├── App.jsx
└── main.jsx
```

---

## ▶️ Instalación y Ejecución

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd tienda-videojuegos
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

---

## 📸 Evidencias del Taller

* Validaciones dinámicas en formularios.
* Persistencia de datos con LocalStorage.
* Alertas Toast de éxito.
* Diseño optimizado mediante IA.
* Navegación SPA con React Router.

---

## 👨‍💻 Autor

**Hancel Espin**

Estudiante de Desarrollo de Software.

Proyecto académico desarrollado utilizando React, Vite y técnicas modernas de desarrollo Frontend.
