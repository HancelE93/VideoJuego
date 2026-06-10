import { useNavigate } from "react-router-dom";

function PaginaNoEncontrada() {

  const navigate = useNavigate();

  return (
    <div style={styles.contenedor}>
      <h1 style={styles.titulo}>404</h1>
      <h2 style={styles.subtitulo}>Página no encontrada</h2>

      <p style={styles.texto}>
        La ruta que intentas acceder no existe o fue eliminada.
      </p>

      <button
        style={styles.boton}
        onClick={() => navigate("/")}
      >
        Volver al inicio
      </button>
    </div>
  );
}

const styles = {
  contenedor: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white",
    textAlign: "center",
    fontFamily: "Arial"
  },
  titulo: {
    fontSize: "80px",
    margin: "0"
  },
  subtitulo: {
    fontSize: "30px",
    margin: "10px 0"
  },
  texto: {
    fontSize: "16px",
    color: "#cbd5e1"
  },
  boton: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#3b82f6",
    color: "white",
    fontSize: "16px"
  }
};

export default PaginaNoEncontrada;