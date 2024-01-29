import Search from "../Search/Search";
import './Pokedex.css'
import PokemonList from "../PokemonList/PokemonList";
import { useState } from "react";
function Pokedex(){
    const[searchterm, setsearchterm] = useState("");
    
    return(

    <div className="pokedex-wrapper">  
        
        <Search updateSearchTerm={setsearchterm}/>
        {/* {searchterm} */}
        <PokemonList />
    </div>
    )
    
}
export default Pokedex;