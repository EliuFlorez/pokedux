import axiosInstance from "./config";

export const getPokemon = (limit = 20) => 
  axiosInstance.get(`pokemon?limit=${limit}&offset=0`)
    .then((response) => response.data)
    .catch((error) => console.error("getPokemonError: ", error));
    