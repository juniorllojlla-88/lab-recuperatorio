
import PersonajeCard from "./PersonajeCard";

function PersonajeList({
    personajes,
    cargando,
    error,
    favoritos,
    onAlternarFavorito
}) {

    if (cargando) {
        return (
            <div className="grid">
                <p className="mensaje">
                    Cargando personajes...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="grid">
                <p className="mensaje error">
                    {error}
                </p>
            </div>
        );
    }

    return (
        <div className="grid">

            {personajes.map((personaje) => {

                const esFavorito = favoritos.some(
                    (favorito) => favorito.id === personaje.id
                );

                return (
                    <PersonajeCard
                        key={personaje.id}
                        personaje={personaje}
                        esFavorito={esFavorito}
                        onAlternarFavorito={onAlternarFavorito}
                    />
                );

            })}

        </div>
    );
}

export default PersonajeList;
