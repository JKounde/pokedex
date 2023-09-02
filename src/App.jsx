import './App.css'
import Pokemoncard from './components/PokemonCard'


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
 
  return (
    <>
      <Pokemoncard pokemon={pokemonList[0]}/>
    </>
  )
}

export default App
