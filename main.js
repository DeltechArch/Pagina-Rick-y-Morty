const BaseURL = "https://rickandmortyapi.com/api";
const personajesURL = `${BaseURL}/character`;

const personajesContainer = document.getElementById('personajes-container');

// Realizar la solicitud a la API cuando la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    axios.get(personajesURL)
        .then(response => {
            const personajes = response.data.results;

            // Iterar sobre cada personaje y crear la plantilla
            personajes.forEach(personaje => {
                const nombre = personaje.name;
                const imagenURL = personaje.image;
                const info = `Especie: ${personaje.species}, Género: ${personaje.gender}`;

                // Crear el artículo para el personaje
                const article = document.createElement('article');

                // Crear el contenedor para la imagen
                const div = document.createElement('div');

                // Crear la imagen
                const imagen = document.createElement('img');
                imagen.src = imagenURL;
                imagen.alt = nombre;

                // Crear los elementos para mostrar el nombre y la info del personaje
                const h2 = document.createElement('h2');
                const p = document.createElement('p');

                h2.textContent = nombre;
                p.textContent = info;

                // Agregar la imagen, el nombre y la info al artículo
                div.appendChild(imagen);
                article.appendChild(div);
                article.appendChild(h2);
                article.appendChild(p);

                // Agregar el artículo al contenedor de personajes
                personajesContainer.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de personajes:', error);
        });
});
