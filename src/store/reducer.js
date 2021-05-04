import {ActionType} from './action';
// import {updatePokemons} from '../utils';

const initialState = {
    pokemons: [],
    isDataLoaded: false,
    // caughtPokemons: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.LOAD_POKEMONS:
        return {
          ...state,
          pokemons: action.payload,
          isDataLoaded: true,
        };
  
      // case ActionType.CHANGE_POKEMON_STATE:
        // return {
          // ...state,
          // pokemons: updatePokemons(state.pokemons, action.payload),
        // };

      // case ActionType.ADD_POKEMON_TO_CAUGHT:
        // return {
          // ...state,
          // caughtPokemons: [...state.caughtPokemons, getPokemonById(state.pokemons, action.payload)]
        // };

        default:
            return {
                ...initialState
            };
    }
    
  };
  

export {reducer};