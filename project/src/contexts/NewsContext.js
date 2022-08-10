import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as newsService from '../services/newsService';

export const NewsContext = createContext();

const newsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NEWS':
            return action.payload.map(x => ({ ...x}));
        case 'ADD_NEW':
            return [...state, action.payload];
        case 'FETCH_NEW_DETAILS':
        case 'EDIT_NEW':
            return state.map(x => x._id === action.newsId ? action.payload : x);
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.newsId ? { ...x} : x);
        case 'REMOVE_NEW':
            return state.filter(x => x._id !== action.newsId);
        default:
            return state;
    }
};

export const NewsProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [news, dispatch] = useReducer(newsReducer, []);

    useEffect(() => {
        newsService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_NEWS',
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectNews = (newsId) => {
        return news.find(x => x._id === newsId) || {};
    };

    const fetchNewsDetails = (newsId, newsDetails) => {
        dispatch({
            type: 'FETCH_NEW_DETAILS',
            payload: newsDetails,
            newsId,
        })
    };
    const addComment = (newsId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            newsId
        });
    }
    const newsAdd = (newsData) => {
        dispatch({
            type: 'ADD_NEW',
            payload: newsData,
        })

        navigate('/catalog');
    };

    const newsEdit = (newsId, newsData) => {
        dispatch({
            type: 'EDIT_NEW',
            payload: newsData,
            newsId,
        });
    };

    const newsRemove = (newsId) => {
        dispatch({
            type: 'REMOVE_NEW',
            newsId
        })
    }
    return (
        <NewsContext.Provider value={{
            news,
            newsAdd,
            newsEdit,
            addComment,
            fetchNewsDetails,
            selectNews,
            newsRemove
        }}>
            {children}
        </NewsContext.Provider>
    );
}
