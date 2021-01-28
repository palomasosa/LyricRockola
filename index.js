const buscador = document.getElementById("buscador");
const letra = document.getElementById("letra");
const form = document.getElementById("form");
const URL = "https://api.lyrics.ovh"

//Funcion para traer las canciones de la api

const getSongs = (value) => {
    fetch(`${URL}/suggest/${value}`)
        .then((valor) => valor.json())
        .then((resultado) => pintarCanciones(resultado));
};


//Funcion para pintar las canciones en el HTML

const pintarCanciones = (array) => {
    const canciones = array.data
    .map(valor => 
    `
     ${valor.artist.name} - ${valor.title}
     <br>
    <audio controls>
        <source src="${valor.preview}" type="audio/mpeg">
    </audio>
    <br>`)
     .join("");
    letra.innerHTML = canciones;
}

// INICIAR
const iniciar = ()=>{
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const cancion = buscador.value;
        getSongs(`${cancion}`)
    } )
}
iniciar();