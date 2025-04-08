import {Link} from 'react-router-dom';

import {FaStar} from 'react-icons/fa'; // Importa o ícone de estrela

const imageURL = import.meta.env.VITE_IMG;


const CardFilme = ({ movie, showLink = true}) => {
  return (
    <div className="card-filme">
        <img src={imageURL + movie.poster_path} alt={movie.title} />  
        <h2>{movie.title}</h2> {/* interpolação de valor simples*/}
        <p>
        <FaStar /> {movie.vote_average} 
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>} {/* onCLick pode ser utilizado no link? */}
    </div>
  );
}

export default CardFilme;