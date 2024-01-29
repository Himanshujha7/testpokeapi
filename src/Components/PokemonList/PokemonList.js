import { useEffect, useState } from "react";
import axios from 'axios';
import Pokemon from "../Pokemon/Pokemon";
import './PokemonList.css'

function PokemonList(){
    const [pokemonlist, setpokemonlist] = useState([]); 
    const [isDownloading, setisDownloading] = useState(true);
    const [pokedexurl, setpokedexurl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nexturl, setnexturl] = useState("");
    const [prevurl, setprevurl] = useState("");
    const [x, setx] = useState(1);


    // const [PokemonListState, setPokemonListState] = useState({
    //     pokemonlist_t: [],
    //     isDownloading_t: true,
    //     pokedexurl_t: "https://pokeapi.co/api/v2/pokemon",
    //     nexturl_t: "",
    //     prevurl_t: "",
    //     x_t: 1
    // })
    
   
    
    async function downloadpokemon() {
        // setPokemonListState({...PokemonListState, isDownloading: true});
        
        setisDownloading(true)

        
        
        const response = await axios.get(pokedexurl);
        
        const pokemonResults = response.data.results;
        
        
        
        // setPokemonListState(()=>({...PokemonListState, nexturl: response.data.next, prevurl: response.data.previous}));
        

        setnexturl(response.data.next)
        setprevurl(response.data.previous)
        
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        
        const pokemonData = await axios.all(pokemonResultPromise);
        const list = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                type: pokemon.types
            }
            })   
            
        // setPokemonListState({...PokemonListState, pokemonlist: list, isDownloading: false}); 
        
        setpokemonlist(list)
        setisDownloading(false);
    }
    

    useEffect(()=> {
        downloadpokemon();
    }, [pokedexurl]);
    
    
    return(
    
        <div className="PokemonList-wrapper">
            <div className="button-wrapper">
                
                <button onClick={()=>(setpokedexurl(prevurl), setx(x-1))} disabled={prevurl==null}>PREVIOUS</button>
                <span>PAGE {x}</span>
                <button onClick={()=>(setpokedexurl(nexturl), setx(x+1))} disabled={nexturl==null}>NEXT</button>
                {/* <button onClick={setPokemonListState({...PokemonListState, pokedexurl: prevurl })} disabled={PokemonListState.prevurl == null}>PREVIOUS</button>
                <span>PAGE {PokemonListState.x}</span>
                <button onClick={setPokemonListState({...PokemonListState, pokedexurl: nexturl })} disabled={PokemonListState.prevurl == null}>NEXT</button>
                 */}
            </div>
            <h1>Pokemon List</h1>
            <div className="Card-wrapper">
            
            {(isDownloading)? "Downloading...": 
                pokemonlist.map((p) => <Pokemon name={p.name} image={p.image} id={p.id} />)}
                
            </div>
            
            
        </div>
    )
}

export default PokemonList ;
