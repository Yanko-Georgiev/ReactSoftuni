
import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MovieContext } from '../../contexts/MovieContext';

import * as movieService from '../../services/movieService';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const MovieDetails = () => {
    const navigate = useNavigate();
    const { fetchMovieDetails, selectMovie, movieRemove } = useContext(MovieContext);
    const { movieId } = useParams();
    const [likes, setLikes]=useState(0)

    const currentMovie = selectMovie(movieId);

    useEffect(() => {
        (async () => {
            const movieDetails = await movieService.getOne(movieId);
            console.log(movieDetails);
        

            fetchMovieDetails(movieId, { ...movieDetails});
        })();
    }, [])


    const movieDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this game?');

        if (confirmation) {
            movieService.remove(movieId)
                .then(() => {
                    movieRemove(movieId);
                    navigate('/catalog');
                })
        }
    }
    return (
        <>
        <Header />
        <section className='details_card'>
                <img src={currentMovie.img} />
                <h1>{currentMovie.title}</h1>
                <p>{currentMovie.description}</p>   
                <button onClick={(e)=>{e.preventDefault();navigate((`/details/${movieId}/edit`))}} className="btn">Edit</button>
                <button onClick={movieDeleteHandler} className="btn">Delete</button>
        </section>
        <Footer />
        </>
    );
};
