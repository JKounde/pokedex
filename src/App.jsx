import './App.css'
import Pokemoncard from './components/PokemonCard'
import { useState } from 'react';




const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex,setpokemonIndex] = useState(0)


  const handlePreviousClick =() => {
    if(pokemonIndex > 0)
    setpokemonIndex (pokemonIndex -1)
  }

  const handleNextClick=() => {
    if(pokemonIndex < pokemonList.length - 1)
    setpokemonIndex (pokemonIndex +1)
  }
 
  return (
    <>
     <Pokemoncard {...pokemonList[pokemonIndex]}/>
    <button onClick={handlePreviousClick}>Précédent</button>
    <button onClick={handleNextClick}>Suivant</button>
    </>
  )
}

export default App
