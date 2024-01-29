import { Link } from 'react-router-dom';
import './Search.css';


function Search({updateSearchTerm}){
    
    return(
    <div className="search-wrapper">
        <Link to="/"><h1>Pokedex</h1></Link>
        <input 
            id="pokemon-name-search" 
            type="text" 
            placeholder="Pokemon Name.."
            onChange={(e)=> updateSearchTerm(e.target.value)}
        />
        
    </div>
    )
}
export default Search;