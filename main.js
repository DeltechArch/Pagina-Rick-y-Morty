const BaseURL = "https://rickandmortyapi.com/api";
const personajesURL = `${BaseURL}/character`;

const personajesContainer = document.getElementById('personajes-container');

const obtenerTodosLosPersonajes = () => {
    axios.get(personajesURL)
        .then(response => {
            const personajes = response.data.results;
            const personajesContainer = document.getElementById('personajes-container');

            // Iterar sobre cada personaje y crear la plantilla HTML
            personajes.forEach(personaje => {
                const nombre = personaje.name;
                const imagenURL = personaje.image;
                const genero = personaje.gender;
                const especie = personaje.species;
                const estado = personaje.status;
                const ubicacion = personaje.location.name;
                const origen = personaje.origin.name;

                // Crear el artículo para el personaje
                const article = document.createElement('article');

                // Crear la imagen
                const imagen = document.createElement('img');
                imagen.src = imagenURL;
                imagen.alt = nombre;

                // Crear el contenedor para el nombre y la información
                const div = document.createElement('div');

                // Crear el título (nombre del personaje)
                const h2 = document.createElement('h2');
                h2.textContent = nombre;

                // Crear la descripción con el resto de la información
                const pDescripcion = document.createElement('p');
                pDescripcion.textContent = "Descripción:";

                const pGenero = document.createElement('p');
                pGenero.textContent = "Género: " + genero;

                const pEspecie = document.createElement('p');
                pEspecie.textContent = "Especie: " + especie;

                const pEstado = document.createElement('p');
                pEstado.textContent = "Estado: " + estado;

                const pUbicacion = document.createElement('p');
                pUbicacion.textContent = "Ubicación: " + ubicacion;

                const pOrigen = document.createElement('p');
                pOrigen.textContent = "Origen: " + origen;

                // Agregar la imagen, el nombre y la descripción al artículo
                article.appendChild(imagen);
                div.appendChild(h2);
                div.appendChild(pDescripcion);
                div.appendChild(pGenero);
                div.appendChild(pEspecie);
                div.appendChild(pEstado);
                div.appendChild(pUbicacion);
                div.appendChild(pOrigen);
                article.appendChild(div);

                // Agregar el artículo al contenedor de personajes
                personajesContainer.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de personajes:', error);
        });
};

// Realizar la solicitud a la API cuando la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    obtenerTodosLosPersonajes();
});










