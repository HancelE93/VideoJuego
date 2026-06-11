import "./TablaVideojuegos.css";
import { useNavigate } from "react-router-dom";

function TablaVideojuegos({ videojuegos, onEliminar }) {
  const navigate = useNavigate();

  function manejarEditar(juego) {
    navigate("/editar", { state: { videojuego: juego } });
  }

  return (
    <div className="contenedor">
      <h1>🎮 Lista de Videojuegos</h1>

      <div className="tabla-contenedor">
        <table className="tabla">

          <thead>
            <tr>
              <th>Portada</th>
              <th>Título</th>
              <th>Género</th>
              <th>Plataforma</th>
              <th>Precio</th>
              <th>Fecha</th>
              <th>Calificación</th>
              <th>Disponible</th>
              <th>Progreso</th>
              <th>Sinopsis</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {videojuegos?.map((juego) => (
              <tr key={juego.id}>

                {/* 🖼️ PORTADA */}
                <td>
                  <img
                    src={juego.imagen || "https://via.placeholder.com/60"}
                    alt={juego.titulo}
                    className="portada"
                  />
                </td>

                <td>{juego.titulo}</td>

                <td>
                  <span className="tag">{juego.genero}</span>
                </td>

                <td>{juego.plataforma}</td>

                <td className="precio">
                  ${juego.precio}
                </td>

                {/* 📅 FECHA */}
                <td>
                  {juego.fecha
                    ? new Date(juego.fecha).toLocaleDateString()
                    : "Sin fecha"}
                </td>

                {/* 🔢 CALIFICACIÓN */}
                <td>
                  {juego.calificacion
                    ? `${juego.calificacion}/100`
                    : "N/A"}
                </td>

                {/* 📌 DISPONIBLE */}
                <td>
                  <span className={
                    juego.disponible
                      ? "estado disponible"
                      : "estado agotado"
                  }>
                    {juego.disponible ? "Disponible" : "Agotado"}
                  </span>
                </td>

                {/* 📊 PROGRESO */}
                <td>
                  <progress value={juego.progreso} max="1" />
                  <span className="porcentaje">
                    {Math.round(juego.progreso * 100)}%
                  </span>
                </td>

                {/* 📝 SINOPSIS */}
                <td>
                  {juego.sinopsis
                    ? juego.sinopsis.length > 40
                      ? juego.sinopsis.substring(0, 40) + "..."
                      : juego.sinopsis
                    : "Sin sinopsis"}
                </td>

                {/* ⚙️ ACCIONES */}
                <td>
                  <button
                    className="btn-editar"
                    onClick={() => manejarEditar(juego)}
                  >
                    ✏️ Editar
                  </button>

                  <button
                    className="btn-eliminar"
                    onClick={() => onEliminar(juego.id)}
                  >
                    🗑 Eliminar
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default TablaVideojuegos;