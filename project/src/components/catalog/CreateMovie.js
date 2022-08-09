
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { MovieContext } from '../../contexts/MovieContext';
import * as movieService from '../../services/movieService';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const CreateMovie = () => {
    const { movieAdd } = useContext(MovieContext);
    const navigate=useNavigate()
    useEffect(()=>{document.getElementById('create').classList.add('active')},[])

    const onSubmit = (e) => {
        e.preventDefault();

        const movieData = Object.fromEntries(new FormData(e.target));

        movieService.create(movieData)
            .then(result => {
                movieAdd(result)
            });
    };

    return (
        <>
        <Header/>
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Add Movie</h1>
                    <label htmlFor="title">Movie title:</label>
                    <input type="text" id="title" name="title"/>
                    <label htmlFor="img">Image:</label>
                    <input type="text" id="img" name="img"/>
                    <label htmlFor="description">Movie description:</label>
                    <textarea name="description" id="description" />
                    <input className="btn" type="submit" value="Add Movie"/>
                    <button onClick={(e)=>{e.preventDefault();navigate((`/`))}} className="btn">Go back</button>
                </div>
            </form>
        </section>
        <Footer />
        </>
    );
};