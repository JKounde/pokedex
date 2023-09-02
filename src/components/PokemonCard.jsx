
import PropTypes from "prop-types";


function PokemonCard({name, imgSrc}) {
  
  return (
    <div>
   <figure> { imgSrc === undefined ? "???": <img src= {imgSrc}  alt= {name} /> } 
   <figcaption> {name}</figcaption>
  </figure>
  </div>
  );
}



PokemonCard.propTypes = {
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
})
}.isRequired

export default PokemonCard;