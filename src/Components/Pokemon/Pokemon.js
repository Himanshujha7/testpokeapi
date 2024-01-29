import { Link } from 'react-router-dom';
import './Pokemon.css'
function Pokemon({ name, image, id}){
    return(
        <Link to={`details/${id}`}>
        <div className="Pokemon-wrapper">
            <h2 id='hii'>{name}</h2>
            <img src={image}/>
        </div>
        </Link>
    )
}
export default Pokemon;