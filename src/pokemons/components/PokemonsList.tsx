'use client'

import { SimplePokemon } from '../interfaces/simple-pokemons';
import { FC } from 'react';
import { PokemonCard } from '..';

interface PokemonsListProps {
  pokemons: SimplePokemon[];
}

export const PokemonsList: FC<PokemonsListProps>= ({ pokemons }) => {
  console.log(pokemons)
  return (
    <>
       {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
    </>
  )
}
