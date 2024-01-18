import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { PokemonsList } from "@/app/pokemons";



const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5lx my-2">Listado de Pokémons <small>estático</small></span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonsList pokemons={pokemons}/>
      </div>
    </div>
  );
}
