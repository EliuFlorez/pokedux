import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid, Icon, Image, Label } from 'semantic-ui-react';
import { setFavorite } from '../../actions';
import { MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR } from '../../utils/constants';
import './styles.css';

export default function PokemonCard({pokemon}) {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }));
  }

  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR;

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <Button className='PokemonFavorite' onClick={handleFavorite}>
          <Icon name='favorite' color={color}></Icon>
        </Button>
        <Image centered src={pokemon.sprites.front_default} alt="Pokemon Front"></Image>
        <p className='PokemonCard-title'>{pokemon.name}</p>
        {pokemon.types.map(type => (
          <Label color={MAIN_COLOR} key={`${pokemon.id}-${type.type.name}`}>{type.type.name}</Label>
        ))}
      </div>
    </Grid.Column>
  );
}