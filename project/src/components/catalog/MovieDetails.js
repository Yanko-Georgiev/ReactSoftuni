
import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MovieContext } from '../../contexts/MovieContext';
import { useAuthContext } from '../../contexts/AuthContext';

import * as movieService from '../../services/movieService';
import * as commentService from'../../services/commentService'
import { Footer } from '../Footer';
import { Header } from '../Header';

export const MovieDetails = () => {
    const navigate = useNavigate();
    const { addComment ,fetchMovieDetails, selectMovie, movieRemove } = useContext(MovieContext);
    const { movieId } = useParams();
    const { user } = useAuthContext();
    useEffect(()=>{document.getElementById('catalog').classList.add('active')},[])

    const currentMovie = selectMovie(movieId);

    useEffect(() => {
        (async () => {
            const movieDetails = await movieService.getOne(movieId);
            const movieComments = await commentService.getByMovieId(movieId)
            fetchMovieDetails(movieId, { ...movieDetails, comments: movieComments.map(x=> `${x.user.email}: ${x.text}` )});
        })();
    }, [])

    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const comment = formData.get('comment');
        if (comment!="") {
            commentService.create(movieId, comment)
            .then(result => {
                addComment(movieId, comment);
            });
            e.target.reset();
        }
        
    };

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
                {user._id==currentMovie._ownerId
                ?<>
                    <button onClick={(e)=>{e.preventDefault();navigate((`/details/${movieId}/edit`))}} className="btn">Edit</button>
                    <button onClick={movieDeleteHandler} className="btn">Delete</button>
                </>
                :null
                }   
        </section>
        <section className='comments_box'>
            <h2>Reviews:</h2>
            <ul>
                {currentMovie.comments
                ?currentMovie.comments.map(x =>
                    <li key={x} className="comment">
                        <p>{x}</p>
                    </li>
                )
                :<li><p>No reviews yet.</p></li>
                }
            </ul>
        </section>
        {user.email
                ?
                <section className="comments">
                <label>Add new review:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" />
                    <input className="btn" type="submit" value="Add Review"/>
                </form>
                </section>
                :null
                }
        <Footer />
        </>
    );
};
