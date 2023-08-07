const BaseURL = "https://rickandmortyapi.com/api";
const personajesURL = `${BaseURL}/character`;
const Episodios = `${BaseURL}/episode`;

const personajesContainer = document.getElementById('personajes-container');

axios.get(BaseURL)
    .then(response =>{
        const apiAll = response.data;
        console.log("Esto es lo que hay en la API",apiAll)
    })

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

                //Aqui termina el forEach
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

// prube propia
const obtenerTodosLosEpisodio = () =>{
    axios.get(Episodios)
    .then(response => {
        const info = response.data.results;
        console.log('Informacion de la api episode :', info);

        const losEpisodiosDeApi = document.getElementById('episodios');

        info.forEach(episodio =>{
            const alaire = episodio.air_date;
            const creado = episodio.created;
            const epi = episodio.episode;
            const nombre = episodio.name;


            const article = document.createElement('article');
            const informacion = document.createElement('div');


            const h1 = document.createElement('h1')
                h1.textContent = "Nombre: " + nombre;
            const p = document.createElement('p');
                p.textContent = "Fecha de aire: " + alaire;
            const p2 = document.createElement('p');
                p2.textContent = "Creado: "+ creado;    
            const p3 = document.createElement('p'); 
                p3.textContent = "Episodio: "+ epi;

            informacion.appendChild(h1);    
            informacion.appendChild(p);
            informacion.appendChild(p2);
            informacion.appendChild(p3);

            article.appendChild(informacion);

            losEpisodiosDeApi.appendChild(article);

        });
    })
    .catch(error => {
        console.error('no salio:', error);
    });

};

// Realizar la solicitud a la API cuando la página se cargue
document.addEventListener('DOMContentLoaded', () => {
    obtenerTodosLosEpisodio();
});
