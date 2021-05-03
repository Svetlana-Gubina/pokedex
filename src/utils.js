const changePokemonState = (pokemon) => {
    if(!pokemon.hasOwnProperty('isCaught')) {
        pokemon.isCaught = true;
        pokemon.captureDate = new Date(Date.now());
    }
    return pokemon;
};

export const updatePokemons = (pokemons, id) => {
    pokemons.forEach((element) => {
        if(element.id === id) {
            changePokemonState(element);
        }
    });
    return pokemons;
};

export const getPokemonById = (pokemons, id) => {
    return pokemons.find((element) => {
        return element.id === id;
    });
};

export const getCaughtPokemons = (pokemons) => {
    return pokemons.filter((element) => {
        return element.hasOwnProperty('isCaught');
    });
};