import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import './styles.css';
import { getPokemon } from '../../api/getPokemon';
import { setError, setPokemon, toggleLoader } from '../../actions';
import axios from 'axios';
import Loader from '../../components/Loader';

function Home() {
  const list = useSelector(state => state.list);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleLoader(true));
    getPokemon().then(res => {
      const pokemonList = res.results;
      return Promise.all(
        pokemonList.map(pokemon => axios.get(pokemon.url))
      );
    })
    .then((pokemonResponse) => {
      const pokemonData = pokemonResponse.map(response => response.data);
      dispatch(setPokemon(pokemonData));
      dispatch(toggleLoader(false));
    })
    .catch((error) => {
      dispatch(setError({ message: 'Error', error }));
      dispatch(toggleLoader(false));
    });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
