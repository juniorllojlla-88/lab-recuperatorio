
function PersonajeCard({
    personaje,
    esFavorito,
    onAlternarFavorito
}) {

    const estadoClase =
        personaje.status === "Alive"
            ? "estado-alive"
            : personaje.status === "Dead"
                ? "estado-dead"
                : "estado-unknown";

    return (
        <div className={`card ${esFavorito ? "fav" : ""}`}>

            <img
                src={personaje.image}
                alt={personaje.name}
            />

            <h4>{personaje.name}</h4>

            <p className={`estado ${estadoClase}`}>
                {personaje.status}
            </p>

            <button
                onClick={() => onAlternarFavorito(personaje)}
            >
                {esFavorito
                    ? "Quitar de favoritos"
                    : "Agregar a favoritos"}
            </button>

        </div>
    );
}

export default PersonajeCard;
