import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as movieService from '../services/movieService';

export const MovieContext = createContext();

const movieReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIES':
            return action.payload.map(x => ({ ...x, comments: []}));
        case 'ADD_MOVIE':
            return [...state, action.payload];
        case 'FETCH_MOVIE_DETAILS':
        case 'EDIT_MOVIE':
            return state.map(x => x._id === action.movieId ? action.payload : x);
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.movieId ? { ...x, comments: [...x.comments, action.payload] } : x);
        case 'REMOVE_MOVIE':
            return state.filter(x => x._id !== action.movieId);
        default:
            return state;
    }
};

export const MovieProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [movies, dispatch] = useReducer(movieReducer, []);

    useEffect(() => {
        movieService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_MOVIES',
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectMovie = (movieId) => {
        return movies.find(x => x._id === movieId) || {};
    };

    const fetchMovieDetails = (movieId, movieDetails) => {
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: movieDetails,
            movieId,
        })
    };
    const addComment = (movieId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            movieId
        });
    }
    const movieAdd = (movieData) => {
        dispatch({
            type: 'ADD_MOVIE',
            payload: movieData,
        })

        navigate('/catalog');
    };

    const movieEdit = (movieId, movieData) => {
        dispatch({
            type: 'EDIT_MOVIE',
            payload: movieData,
            movieId,
        });
    };

    const movieRemove = (movieId) => {
        dispatch({
            type: 'REMOVE_MOVIE',
            movieId
        })
    }
    return (
        <MovieContext.Provider value={{
            movies,
            movieAdd,
            movieEdit,
            addComment,
            fetchMovieDetails,
            selectMovie,
            movieRemove
        }}>
            {children}
        </MovieContext.Provider>
    );
}
