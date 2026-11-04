const API_URL = "https://rickandmortyapi.com/api/character";

export async function fetchPersonajes() {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener los personajes");
    }

    const datos = await respuesta.json();

    return datos.results;
}
