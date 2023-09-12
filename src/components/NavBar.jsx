

export default function NavBar (handlePreviousClick,handleNextClick) {
    return(     
    <>
       <button onClick={handlePreviousClick}>Précédent</button>
        <button onClick={handleNextClick}>Suivant</button>
    </>  
    )}