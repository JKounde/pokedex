import './App.css'
import Pokemoncard from './components/PokemonCard'
import { useState } from 'react';
import NavBar from './components/navbar';


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
     <NavBar handlePreviousClick ={handlePreviousClick} handleNextClick={handleNextClick}/> 
    </>
  )
}

export default App
