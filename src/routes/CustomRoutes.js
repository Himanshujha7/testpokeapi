import { Routes, Route } from "react-router-dom";
import Pokedex from "../Components/Pokedex/Pokedex";
import PokemonDetail from "../Components/PokemonDetails/PokemonDetail";


function CustomRoutes(){
    
    
    return(
        <Routes>
            
            <Route path="/" element={<Pokedex />} />
            <Route path="/details/:id" element={<PokemonDetail />} />

        </Routes>
    )
}
export default CustomRoutes;