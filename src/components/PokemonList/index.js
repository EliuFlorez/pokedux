import React from 'react';
import { Grid } from 'semantic-ui-react';
import PokemonCard from './PokemonCard';

const PokemonList = ({pokemons}) => {
  return (
    <div className='wrapper'>
      <Grid>
        {pokemons.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} key={index} />
        })}
      </Grid>
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: [],
}

export default PokemonList;
