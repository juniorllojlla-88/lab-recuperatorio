
import { useState } from "react";

import { usePersonajes } from "./hooks/usePersonajes";

import PersonajeList from "./components/PersonajeList";

import FavoritesPanel from "./components/FavoritesPanel";


function MultiversoApp() {

    const {
        personajes,
        cargando,
        error
    } = usePersonajes();

    const [favoritos, setFavoritos] = useState([]);

    const alternarFavorito = (personaje) => {

        setFavoritos((actuales) => {

            const existe = actuales.some(
                (favorito) => favorito.id === personaje.id
            );

            if (existe) {

                return actuales.filter(
                    (favorito) => favorito.id !== personaje.id
                );

            }

            return [...actuales, personaje];

        });

    };

    const quitarFavorito = (personaje) => {

        setFavoritos((actuales) =>
            actuales.filter(
                (favorito) => favorito.id !== personaje.id
            )
        );

    };

    return (

        <div>

            <h1>Rick and Morty Universo</h1>

            <div className="layout">

                <PersonajeList
                    personajes={personajes}
                    cargando={cargando}
                    error={error}
                    favoritos={favoritos}
                    onAlternarFavorito={alternarFavorito}
                />

                <FavoritesPanel
                    favoritos={favoritos}
                    onQuitarFavorito={quitarFavorito}
                />

            </div>

        </div>

    );
}

export default MultiversoApp;
