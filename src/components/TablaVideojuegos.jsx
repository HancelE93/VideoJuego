import "./TablaVideojuegos.css";

function TablaVideojuegos({ videojuegos }) {
  return (
    <div className="contenedor">
      <h1>Lista</h1>

      <div className="tabla-contenedor">
        <table className="tabla">
          <thead>
            <tr>
              <th>Título</th>
              <th>Género</th>
              <th>Plataforma</th>
              <th>Precio</th>
              <th>Disponible</th>
              <th>Progreso</th>
            </tr>
          </thead>

          <tbody>
            {videojuegos.map((juego) => (
              <tr key={juego.id}>
                <td>{juego.titulo}</td>

                <td>
                  <span className="tag">
                    {juego.genero}
                  </span>
                </td>

                <td>{juego.plataforma}</td>

                <td className="precio">
                  ${juego.precio}
                </td>

                <td>
                  <span
                    className={
                      juego.disponible
                        ? "estado disponible"
                        : "estado agotado"
                    }
                  >
                    {juego.disponible
                      ? "Disponible"
                      : "Agotado"}
                  </span>
                </td>

                <td>
                  <progress
                    value={juego.progreso}
                    max="1"
                  />

                  <span className="porcentaje">
                    {Math.round(juego.progreso * 100)}%
                  </span>
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