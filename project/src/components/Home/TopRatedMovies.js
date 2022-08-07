import { Link } from "react-router-dom";

export const TopRatedMovies = ({movie}) =>{
    return(
        <div className="movie">
            <div className="movie-image">
                <span className="name">{movie.title}</span>
                <Link to={`/details/${movie._id}`}>
                <img src={movie.img} alt="" />
                </Link>
            </div>
            <div className="rating">
                <p>RATING</p>
                <div className="stars">
                <div className="stars-in"> </div>
                </div>
            </div>
        </div>
    )
}