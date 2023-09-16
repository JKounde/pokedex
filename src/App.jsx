import './App.css'
import Pokemoncard from './components/PokemonCard'
import { useState } from 'react';
import { useEffect } from 'react';
import NavBar from "./components/NavBar"


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

    useEffect(
      () => {
        alert( "Hello pokemon trainer :)"); 
      },
      []
    );
  
/*{name === "pikachu"? useEffect(
  () => {
    alert( "pika pikachu !!!"); 
  },
  []
);: <img src= {imgSrc}  alt= {name} />*/




    useEffect(
      () => {
        alert( "Hello pokemon trainer :)"); 
      },
      []
    );


    const handlePreviousClick =() => {
      if(pokemonIndex > 0){
     
 const previousPokemon = pokemonList[pokemonIndex -1].name;
  setpokemonIndex (pokemonIndex -1);

 if (previousPokemon === "pikachu") {
  alert("pika pikachu !!!");
 }
    }};
  
    const handleNextClick=() => {
      if(pokemonIndex < pokemonList.length - 1){
      const nextPokemon = pokemonList[pokemonIndex +1].name;
      setpokemonIndex (pokemonIndex +1);
      if (nextPokemon ==="pikachu") {
        alert("pika pikachu !!!");  
      }
   }};
   
    return (
      <>
       <Pokemoncard {...pokemonList[pokemonIndex]}/>
        <NavBar/>
      </>
    )
  }
  
  export default App