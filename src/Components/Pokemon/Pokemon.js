import './Pokemon.css'
function Pokemon({ name, image, id}){
    return(
        <div className="Pokemon-wrapper">
            <h2>{name}</h2>
            <img src={image} id={id}/>
        </div>
    )
}
export default Pokemon;