'use client'
import Image from 'next/image';
import { SimplePokemon } from '../interfaces/simple-pokemons';
import { FC } from 'react';

interface PokemonsListProps {
  pokemons: SimplePokemon[];
}

export const PokemonsList: FC<PokemonsListProps>= ({ pokemons }) => {
  console.log(pokemons)
  return (
    <>
       {pokemons.map((pokemon) => (
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            key={pokemon.id}
          />
        ))}
    </>
  )
}
