
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as movieService from '../../services/movieService';
import { MovieContext } from "../../contexts/MovieContext";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const EditMovie = () => {
    const [currentMovie, setCurrentMovie] = useState({});
    const { movieEdit } = useContext(MovieContext);
    const { movieId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getOne(movieId)
            .then(movieData => {
                setCurrentMovie(movieData);
            })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        const movieData = Object.fromEntries(new FormData(e.target));

        movieService.edit(movieId, movieData)
            .then(result => {
                movieEdit(movieId, result);
                navigate(`/details/${movieId}`)
            });
    };

    return (
        <>
        <Header />
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Movie</h1>
                    <label htmlFor="title">Movie title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentMovie.title} />
                    
                    <label htmlFor="img">Image:</label>
                    <input type="text" id="img" name="img" defaultValue={currentMovie.img} />
                    <label htmlFor="description">Movie description:</label>
                    <textarea name="description" id="description" defaultValue={currentMovie.description} />
                    <input className="btn" type="submit" value="Edit Movie" />
                    <button onClick={(e)=>{e.preventDefault();navigate((`/details/${movieId}`))}} className="btn">Go back</button>
                </div>
            </form>
        </section>
        <Footer />
        </>
    );
}
