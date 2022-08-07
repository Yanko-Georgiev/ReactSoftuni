
import { useNavigate } from "react-router-dom";

export const CatalogItem = ({ movie }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="movie_card">
                <div className="info_section">
                    <h1>{movie.title}</h1>
                    <img className="poster" src={movie.img} alt="" />
                    <button onClick={(e) => { e.preventDefault(); navigate((`/details/${movie._id}`)) }} className="btn details_btn">Details</button>
                </div>
                
            </div>
        </>
    )
}