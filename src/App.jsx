import { useState } from 'react'
import './App.css'
import data from './data/videojuegos'
import Navbar from './components/Navbar'
import TablaVideojuegos from './components/TablaVideojuegos'
import FormularioVideojuego from './components/FormularioVideojuego'
import PaginaNoEncontrada from './components/PaginaNoEncontrada'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [videojuegos, setVideojuegos] = useState(data)

  function agregarVideojuego(nuevo) {
    setVideojuegos([...videojuegos, nuevo])
  }

  function eliminarVideojuego(id) {
    const filtrado = videojuegos.filter((v) => v.id !== id)
    setVideojuegos(filtrado)
  }

  function editarVideojuego(editado) {
    const actualizados = videojuegos.map((v) =>
      v.id === editado.id ? editado : v
    )
    setVideojuegos(actualizados)
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

        {/* 404 */}
        <Route
          path="*"
          element={<PaginaNoEncontrada />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App