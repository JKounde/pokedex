function Pokemoncard({imgSrc,name}){
    return (

 <div>
    <figure>{imgSrc === undefined ?"???": <img src = {imgSrc} alt= {name}/>}
      <figcaption>{name}</figcaption>
   </figure>
</div>
    );
}
export default Pokemoncard;