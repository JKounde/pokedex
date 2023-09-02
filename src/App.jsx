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
  const [count,setcount] = useState(0)
  const handlePreviousClick =() => {
    setcount (count -1)
  }
  const handleNextClick=() => {
    setcount (count +1)
  }
 
  return (
    <>
     <Pokemoncard {...pokemonList[count]}/>
     <button onClick={handlePreviousClick}>Précédent</button>
     <button onClick={handleNextClick}>Suivant</button>
     
    </>
  )
}

export default App
