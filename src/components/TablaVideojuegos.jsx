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
              <th>Disponible</th>
              <th>Progreso</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {videojuegos?.map((juego) => (
              <tr key={juego.id}>

                {/* PORTADA */}
                <td>
                  <img
                    src={juego.imagen}
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

                <td>
                  <span className={
                    juego.disponible
                      ? "estado disponible"
                      : "estado agotado"
                  }>
                    {juego.disponible ? "Disponible" : "Agotado"}
                  </span>
                </td>

                <td>
                  <progress value={juego.progreso} max="1" />
                  <span className="porcentaje">
                    {Math.round(juego.progreso * 100)}%
                  </span>
                </td>

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