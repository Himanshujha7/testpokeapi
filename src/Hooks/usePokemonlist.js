// function usePokemonlist(){
//     const [pokemonlist, setpokemonlist] = useState([]); 
//     const [isDownloading, setisDownloading] = useState(true);
//     const [pokedexurl, setpokedexurl] = useState("https://pokeapi.co/api/v2/pokemon");
//     const [nexturl, setnexturl] = useState("");
//     const [prevurl, setprevurl] = useState("");
//     const [x, setx] = useState(1);

//     async function downloadpokemon() {
//         // setPokemonListState({...PokemonListState, isDownloading: true});
        
//         setisDownloading(true)

//         setPokemonListState((state)=> ({...state, x_1: 323}))
//         console.log(PokemonListState.x_t)
        
//         const response = await axios.get(pokedexurl);
        
//         const pokemonResults = response.data.results;
        
        
        
//         // setPokemonListState(()=>({...PokemonListState, nexturl: response.data.next, prevurl: response.data.previous}));
        

//         setnexturl(response.data.next)
//         setprevurl(response.data.previous)
        
//         const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        
//         const pokemonData = await axios.all(pokemonResultPromise);
//         const list = pokemonData.map((pokeData) => {
//             const pokemon = pokeData.data;
//             return {
//                 id: pokemon.id,
//                 name: pokemon.name,
//                 image: pokemon.sprites.other.dream_world.front_default,
//                 type: pokemon.types
//             }
//             })   
            
//         // setPokemonListState({...PokemonListState, pokemonlist: list, isDownloading: false}); 
        
//         setpokemonlist(list)
//         setisDownloading(false);
//     }

//     useEffect(()=> {
//         downloadpokemon();
//     }, [pokedexurl]);
// }

// export default usePokemonlist