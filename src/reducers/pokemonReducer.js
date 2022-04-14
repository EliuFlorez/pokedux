import { fromJS } from "immutable";
import { SET_POKEMOM, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER, SET_FAVORITE } from "../actions/type";

const initialState = {
  list: [],
  error: '',
  loading: false,
}

const pokemonReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_POKEMOM:
      return { ...state, list: action.payload }
    case SET_FAVORITE:
      const newPokemonList = [ ...state.list ];
      const currentPokemonIndex = newPokemonList.findIndex(
        (e) => e.id === action.payload.pokemonId
      );
      if (currentPokemonIndex > 0) {
        newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
      }
      return { ...state, list: newPokemonList }
    case SET_ERROR:
      return { ...state, list: action.payload.message }
    case CLEAR_ERROR:
      return { ...state, error: '' }
    case TOGGLE_LOADER:
      return { ...state, loading: action.payload }
    default:
      return { ...state };
  }
}

export default pokemonReducer;