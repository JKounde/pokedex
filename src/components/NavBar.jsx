

export default function NavBar ({handlePreviousClick,handleNextClick}) {
console.log("coucou",handlePreviousClick);
    return(     
    <>
       <button onClick={handlePreviousClick}>Précédent</button>
        <button onClick={handleNextClick}>Suivant</button>
    </>  
    )}

    /*const App = () => {
        const handleClick = () => {
          console.log('button clicked');
        };
      
        return (
          <div>
            <button onClick={handleClick}>Click</button>
          </div>
        );
      };
      
      export default App;*/