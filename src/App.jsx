import { useState, useEffect } from 'react'
import './App.css'
import data from './data/videojuegos'

import Navbar from './components/Navbar'
import TablaVideojuegos from './components/TablaVideojuegos'
import FormularioVideojuego from './components/FormularioVideojuego'
import PaginaNoEncontrada from './components/PaginaNoEncontrada'
import AlertaNotificacion from './components/AlertaNotificacion'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  // 🔥 CARGA PEREZOSA DESDE localStorage o data.js
  const [videojuegos, setVideojuegos] = useState(() => {
    const datosGuardados = localStorage.getItem("videojuegos")
    return datosGuardados ? JSON.parse(datosGuardados) : data
  })

  const [mensaje, setMensaje] = useState("")

  // 💾 GUARDAR AUTOMÁTICAMENTE EN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("videojuegos", JSON.stringify(videojuegos))
  }, [videojuegos])

  // 🔔 MENSAJES
  function mostrarMensaje(texto) {
    setMensaje(texto)
    setTimeout(() => setMensaje(""), 3000)
  }

  // ➕ AGREGAR
  function agregarVideojuego(nuevo) {
    setVideojuegos([...videojuegos, nuevo])
    mostrarMensaje("🎉 Videojuego agregado correctamente")
  }

  // 🗑 ELIMINAR
  function eliminarVideojuego(id) {
    const filtrado = videojuegos.filter((v) => v.id !== id)
    setVideojuegos(filtrado)
    mostrarMensaje("🗑 Videojuego eliminado")
  }

  // ✏️ EDITAR
  function editarVideojuego(editado) {
    const actualizados = videojuegos.map((v) =>
      v.id === editado.id ? editado : v
    )

    setVideojuegos(actualizados)
    mostrarMensaje("✏️ Videojuego actualizado")
  }

  // 🔄 GUARDAR (crear o editar)
  function manejarGuardar(videojuego) {
    const existe = videojuegos.find((v) => v.id === videojuego.id)

    if (existe) {
      editarVideojuego(videojuego)
    } else {
      agregarVideojuego(videojuego)
    }
  }

  return (
    <BrowserRouter>
      <Navbar />

      {/* 🔔 ALERTA */}
      {mensaje && (
        <AlertaNotificacion
          mensaje={mensaje}
          onClose={() => setMensaje("")}
        />
      )}

      <Routes>

        {/* 📋 LISTAR */}
        <Route
          path="/"
          element={
            <TablaVideojuegos
              videojuegos={videojuegos}
              onEliminar={eliminarVideojuego}
            />
          }
        />

        {/* ➕ NUEVO */}
        <Route
          path="/nuevo"
          element={
            <FormularioVideojuego
              onGuardar={manejarGuardar}
            />
          }
        />

        {/* ✏️ EDITAR */}
        <Route
          path="/editar"
          element={
            <FormularioVideojuego
              onGuardar={manejarGuardar}
            />
          }
        />

        {/* ❌ NO ENCONTRADO */}
        <Route
          path="*"
          element={<PaginaNoEncontrada />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App