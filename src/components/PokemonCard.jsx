function Pokemoncard({pokemon}){
    return (

 <div>
    <figure>{pokemon.imgSrc === undefined ?"???": <img src = {pokemon.imgSrc} alt= {pokemon.name}/>}
      <figcaption>{pokemon.name}</figcaption>
   </figure>
</div>
    );
}
export default Pokemoncard;