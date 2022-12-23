import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons, setPokemon}) {



  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
    <Card.Group itemsPerRow={6}>
      {pokemons.map((pokemon) => { return (
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
      
      )})}
    </Card.Group>
    </div>
  );
}

export default PokemonCollection;
