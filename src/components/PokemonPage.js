import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import {useState, useEffect} from "react"

function PokemonPage() {

  const [pokemons, setPokemon] = useState([])

  const Pokedex = async () => {
   const req = await fetch("http://localhost:3000/pokemon")
   const res = await req.json()
   setPokemon(res)
    
  }

  useEffect(() => {
    Pokedex();
  }, [])


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemons={pokemons} setPokemon={setPokemon}/>
    </Container>
  );
}

export default PokemonPage;
