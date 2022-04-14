import { SET_POKEMOM, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER, SET_FAVORITE } from "./type";

export const setPokemon = (payload) => ({
  type: SET_POKEMOM,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const toggleLoader = (payload) => ({
  type: TOGGLE_LOADER,
  payload
});
