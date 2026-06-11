import { useState } from 'react'
import './App.css'
import data from './data/videojuegos'
import Navbar from './components/Navbar'
import TablaVideojuegos from './components/TablaVideojuegos'
import FormularioVideojuego from './components/FormularioVideojuego'
import PaginaNoEncontrada from './components/PaginaNoEncontrada'
import AlertaNotificacion from './components/AlertaNotificacion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  // 🔥 CARGAR DIRECTAMENTE DESDE data.js
  const [videojuegos, setVideojuegos] = useState(data)

  const [mensaje, setMensaje] = useState("")

  function mostrarMensaje(texto) {
    setMensaje(texto)
    setTimeout(() => setMensaje(""), 3000)
  }

  function agregarVideojuego(nuevo) {
    setVideojuegos([...videojuegos, nuevo])
    mostrarMensaje("🎉 Videojuego agregado correctamente")
  }

  function eliminarVideojuego(id) {
    const filtrado = videojuegos.filter((v) => v.id !== id)
    setVideojuegos(filtrado)
    mostrarMensaje("🗑 Videojuego eliminado")
  }

  function editarVideojuego(editado) {
    const actualizados = videojuegos.map((v) =>
      v.id === editado.id ? editado : v
    )

    setVideojuegos(actualizados)
    mostrarMensaje("✏️ Videojuego actualizado")
  }

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

      {mensaje && (
        <AlertaNotificacion
          mensaje={mensaje}
          onClose={() => setMensaje("")}
        />
      )}

      <Routes>

        <Route
          path="/"
          element={
            <TablaVideojuegos
              videojuegos={videojuegos}
              onEliminar={eliminarVideojuego}
            />
          }
        />

        <Route
          path="/nuevo"
          element={
            <FormularioVideojuego
              onGuardar={manejarGuardar}
            />
          }
        />

        <Route
          path="/editar"
          element={
            <FormularioVideojuego
              onGuardar={manejarGuardar}
            />
          }
        />

        <Route
          path="*"
          element={<PaginaNoEncontrada />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App