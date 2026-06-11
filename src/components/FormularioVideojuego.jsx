import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./FormularioVideojuego.css";

function FormularioVideojuego({ onGuardar }) {
  const location = useLocation();
  const navigate = useNavigate();

  const videoJuegoRecuperado = location.state?.videojuego || null;

  // 🧠 estados principales
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [precio, setPrecio] = useState("");
  const [disponible, setDisponible] = useState(true);
  const [progreso, setProgreso] = useState("");

  // ✨ CAMPOS NUEVOS
  const [fecha, setFecha] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [calificacion, setCalificacion] = useState("");

  // 🔴 errores
  const [errores, setErrores] = useState({});

  // 📥 cargar datos en edición
  useEffect(() => {
    if (videoJuegoRecuperado) {
      setTitulo(videoJuegoRecuperado.titulo || "");
      setGenero(videoJuegoRecuperado.genero || "");
      setPlataforma(videoJuegoRecuperado.plataforma || "");
      setPrecio(videoJuegoRecuperado.precio || "");
      setDisponible(videoJuegoRecuperado.disponible ?? true);
      setProgreso(videoJuegoRecuperado.progreso || "");

      setFecha(videoJuegoRecuperado.fecha || "");
      setSinopsis(videoJuegoRecuperado.sinopsis || "");
      setCalificacion(videoJuegoRecuperado.calificacion || "");
    }
  }, [videoJuegoRecuperado]);

  // 🔒 VALIDACIÓN
  const validarFormulario = () => {
    const erroresActivos = {};

    if (!titulo.trim()) {
      erroresActivos.titulo = "El título no puede estar vacío";
    }

    if (!sinopsis || sinopsis.trim().length < 10) {
      erroresActivos.sinopsis = "La sinopsis debe tener mínimo 10 caracteres";
    }

    if (!calificacion || calificacion < 1 || calificacion > 100) {
      erroresActivos.calificacion = "Debe estar entre 1 y 100";
    }

    if (fecha && new Date(fecha) > new Date()) {
      erroresActivos.fecha = "La fecha no puede ser futura";
    }

    setErrores(erroresActivos);

    return Object.keys(erroresActivos).length === 0;
  };

  // 💾 GUARDAR
  function manejarGuardar() {
    if (!validarFormulario()) return;

    const videojuego = {
      id: videoJuegoRecuperado ? videoJuegoRecuperado.id : Date.now(),
      titulo,
      genero,
      plataforma,
      precio: Number(precio),
      disponible,
      progreso: Number(progreso),

      // 🔥 CAMPOS NUEVOS
      fecha,
      sinopsis,
      calificacion: Number(calificacion)
    };

    onGuardar(videojuego);
    navigate("/");
  }

  function manejarCancelar() {
    navigate("/");
  }

  return (
    <div className="form-container">
      <h2>🎮 Formulario Videojuegos</h2>

      {/* TITULO */}
      <label>Título</label>
      <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      {errores.titulo && <span className="error">{errores.titulo}</span>}

      <br /><br />

      <label>Género</label>
      <input value={genero} onChange={(e) => setGenero(e.target.value)} />

      <br /><br />

      <label>Plataforma</label>
      <input value={plataforma} onChange={(e) => setPlataforma(e.target.value)} />

      <br /><br />

      <label>Precio</label>
      <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />

      <br /><br />

      <label>Progreso</label>
      <input type="number" step="0.01" value={progreso} onChange={(e) => setProgreso(e.target.value)} />

      <br /><br />

      {/* FECHA */}
      <label>Fecha de lanzamiento</label>
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      {errores.fecha && <span className="error">{errores.fecha}</span>}

      <br /><br />

      {/* SINOPSIS */}
      <label>Sinopsis</label>
      <textarea value={sinopsis} onChange={(e) => setSinopsis(e.target.value)} />
      {errores.sinopsis && <span className="error">{errores.sinopsis}</span>}

      <br /><br />

      {/* CALIFICACION */}
      <label>Calificación (1-100)</label>
      <input
        type="number"
        value={calificacion}
        onChange={(e) => setCalificacion(e.target.value)}
      />
      {errores.calificacion && (
        <span className="error">{errores.calificacion}</span>
      )}

      <br /><br />

      {/* DISPONIBLE */}
      <label>
        Disponible:
        <input
          type="checkbox"
          checked={disponible}
          onChange={(e) => setDisponible(e.target.checked)}
        />
      </label>

      <br /><br />

      <button onClick={manejarGuardar}>Guardar</button>
      <button onClick={manejarCancelar}>Cancelar</button>
    </div>
  );
}

export default FormularioVideojuego;