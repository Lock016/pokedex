// Variables

const form = document.querySelector('#search');
const container = document.querySelector('.container');


// Events
callEvents();

function callEvents() {
    form.addEventListener('submit', addPokemon);
};


// Functions

function addPokemon(e) {
    e.preventDefault();
    const data = e.target[0].value;
    const input = data.toLowerCase();
    pokemonInfo(input);

};

function pokemonInfo(input) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + input;
    getData(url);
};

async function getData(url){
    const result = await( await fetch(url)).json();
    const pokemon = {
        id: result.id,
        name: result.name,
        sprite: result.sprites.front_default
    };
    const { name, sprite, id } = pokemon;
    const card = document.createElement('div');
    card.innerHTML = 
    `
    <div class="card">
        <h4 id="name">${capitalizeFirstLetter(name)}</h4>
        <img src="${sprite}" alt="">
        <p><strong>ID:</strong> ${id}</p>
    </div>
    `
    container.appendChild(card);
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};