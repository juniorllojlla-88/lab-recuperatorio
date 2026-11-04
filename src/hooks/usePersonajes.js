
import { useEffect, useState } from "react";
import { fetchPersonajes } from "../services/fetchPersonajes";

export function usePersonajes() {
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let activo = true;

        const cargarPersonajes = async () => {
            try {
                setCargando(true);
                setError("");

                const datos = await fetchPersonajes();

                if (activo) {
                    setPersonajes(datos);
                }

            } catch (err) {
                if (activo) {
                    setError(
                        "No se pudieron cargar los personajes. Verifica tu conexión a Internet."
                    );
                    setPersonajes([]);
                }

            } finally {
                if (activo) {
                    setCargando(false);
                }
            }
        };

        cargarPersonajes();

        return () => {
            activo = false;
        };

    }, []);

    return {
        personajes,
        cargando,
        error
    };
}
