export const ActionType = {
    LOAD_POKEMONS: `store/loadPokemons`,
    CHANGE_POKEMON_STATE: 'main/changePokemonState',
    ADD_POKEMON_TO_CAUGHT: 'main/addPokemonToCaught',
};

export const ActionCreator = {
    loadPokemons: (data) => ({
      type: ActionType.LOAD_POKEMONS,
      payload: data,
    }),
    changePokemonState: (id) => ({
      type: ActionType.CHANGE_POKEMON_STATE,
      payload: id
    }),
    addPokemonToCaught: (id) => ({
        type: ActionType.ADD_POKEMON_TO_CAUGHT,
        payload: id
    }),
};
  