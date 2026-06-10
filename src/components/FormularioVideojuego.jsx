import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './FormularioVideojuego.css';

function FormularioVideojuego({ onGuardar }) {

    const location = useLocation();
    const navigate = useNavigate();

    const videoJuegoRecuperado = location.state?.videojuego || null;

    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [plataforma, setPlataforma] = useState("");
    const [lanzamiento, setLanzamiento] = useState("");
    const [precio, setPrecio] = useState("");
    const [disponible, setDisponible] = useState(true);
    const [progreso, setProgreso] = useState("");

    useEffect(() => {
        if (videoJuegoRecuperado) {
            setTitulo(videoJuegoRecuperado.titulo);
            setGenero(videoJuegoRecuperado.genero);
            setPlataforma(videoJuegoRecuperado.plataforma);
            setLanzamiento(videoJuegoRecuperado.lanzamiento);
            setPrecio(videoJuegoRecuperado.precio);
            setDisponible(videoJuegoRecuperado.disponible);
            setProgreso(videoJuegoRecuperado.progreso);
        } else {
            setTitulo("");
            setGenero("");
            setPlataforma("");
            setLanzamiento("");
            setPrecio("");
            setDisponible(true);
            setProgreso("");
        }
    }, [videoJuegoRecuperado]);

    function manejarGuardar() {

        const videojuego = {
            id: videoJuegoRecuperado ? videoJuegoRecuperado.id : Date.now(),
            titulo,
            genero,
            plataforma,
            lanzamiento: Number(lanzamiento),
            precio: Number(precio),
            disponible,
            progreso: Number(progreso)
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

            <label>Título</label>
            <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />

            <br /><br />

            <label>Género</label>
            <input value={genero} onChange={(e) => setGenero(e.target.value)} />

            <br /><br />

            <label>Plataforma</label>
            <input value={plataforma} onChange={(e) => setPlataforma(e.target.value)} />

            <br /><br />

            <label>Lanzamiento</label>
            <input type="number" value={lanzamiento} onChange={(e) => setLanzamiento(e.target.value)} />

            <br /><br />

            <label>Precio</label>
            <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />

            <br /><br />

            <label>Progreso</label>
            <input type="number" step="0.01" value={progreso} onChange={(e) => setProgreso(e.target.value)} />

            <br /><br />

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