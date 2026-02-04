// obtener elementos
var botonPokemon = document.getElementById("botonPokemon");
var pokemonEntrada = document.getElementById("pokemonEntrada");
var pokemonResultado = document.getElementById("pokemonResultado");

// evento click
botonPokemon.onclick = function () {

    var nombre = pokemonEntrada.value.toLowerCase();

    // mensaje mientras carga
    pokemonResultado.innerHTML = "<p class='estado'>CARGANDO...</p>";

    fetch("https://pokeapi.co/api/v2/pokemon/" + nombre)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {

            pokemonResultado.innerHTML =
                "<img src='" + data.sprites.front_default + "'>" +
                "<h3 class='pokemon-nombre'>" + data.name + "</h3>" +
                "<p class='pokemon-tipo'>TIPO: " + data.types[0].type.name + "</p>" +
                "<p>HP: " + data.stats[0].base_stat + "</p>" +
                "<p>ATAQUE: " + data.stats[1].base_stat + "</p>" +
                "<p>DEFENSA: " + data.stats[2].base_stat + "</p>";
        });
};

// JAVA SCRIPT PARA CONSUMIR LA API DE CHISTES
var botonChiste = document.getElementById("botonChiste");
var chisteResultado = document.getElementById("chisteResultado");

botonChiste.onclick = function () {

    chisteResultado.innerHTML = "<p>CARGANDO CHISTE...</p>";

    fetch("https://v2.jokeapi.dev/joke/Any?type=single&lang=es")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {
            chisteResultado.innerHTML = "<p>" + data.joke + "</p>";
        });
};
