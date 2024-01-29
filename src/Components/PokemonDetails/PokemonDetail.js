import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../Search/Search";
import './PokemonDetail.css'


function PokemonDetail(){
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    async function downloadPokemon(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            type: response.data.types.map((t)=>" " +t.type.name)


        })
    }



    useEffect(()=>{
        downloadPokemon()
    }, []);


    return(
        <>
        <Search />
        <div className="PokemonDetail-wrapper">
            
            <div className="pokemon-name">{pokemon.name}</div>
            <img className="pokemon-image" src={pokemon.image}></img>
            <div> height: {pokemon.height}</div>
            <div> weight: {pokemon.weight}</div>
            <div> Ability:</div>
            <div> {pokemon.type}</div>
        
        </div>
        </>
    )
}

export default PokemonDetail;