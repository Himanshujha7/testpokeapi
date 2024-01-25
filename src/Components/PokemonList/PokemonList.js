import { useEffect, useState } from "react";
import axios from 'axios';
import Pokemon from "../Pokemon/Pokemon";
import './PokemonList.css'

function PokemonList(){
    const [pokemonlist, setpokemonlist] = useState([]); 
    const [isDownloading, setisDownloading] = useState(true);
    const [next, setnext] = useState(false);
    const [prev, setprev] = useState(false);
    const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon");


    

    async function downloadpokemon() {
        
        const response = await axios.get(url);
        let pokemonResults = response.data.results;
        const nexturl = response.data.next
        const prevurl = response.data.previous
        let pok = ""
        if (next == true){
            seturl(nexturl);
            setnext(false);
            
        }else if(prev == true){  
            seturl(prevurl);
            setprev(false);
        }
        console.log(next)
        console.log(prev)
        console.log(url)
        console.log(nexturl)
        console.log(prevurl)

        
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
        
        setpokemonlist(list)
        
        
        
    }

            
    useEffect(()=> {
        
        downloadpokemon();
        setisDownloading(false);
    
    }, [next, prev, url]);
    
    
    return(
    
        <div className="PokemonList-wrapper">
            <div className="button-wrapper">
                <button onClick={()=> setprev(true)}>PREVIOUS</button>
                <button onClick={()=> setnext(true)}>NEXT</button>
                
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
