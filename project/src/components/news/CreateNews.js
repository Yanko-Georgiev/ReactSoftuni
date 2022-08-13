import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { NewsContext } from '../../contexts/NewsContext';
import * as newsService from '../../services/newsService';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const CreateNews = () => {
    const { newsAdd } = useContext(NewsContext);
    const navigate=useNavigate()
    useEffect(()=>{document.getElementById('add').classList.add('active')},[])

    const onSubmit = (e) => {
        e.preventDefault();

        const newsData = Object.fromEntries(new FormData(e.target));

        newsService.create(newsData)
            .then(result => {
                newsAdd(result)
                navigate('/news')
            });
    };

    return (
        <>
        <Header/>
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Add News</h1>
                    <label htmlFor="title">News title:</label>
                    <input type="text" id="title" name="title"/>
                    <label htmlFor="img">Image:</label>
                    <input type="text" id="img" name="img"/>
                    <label htmlFor="description">News text:</label>
                    <textarea name="description" id="description" />
                    <input className="btn" type="submit" value="Add News"/>
                    <button onClick={(e)=>{e.preventDefault();navigate((`/`))}} className="btn">Go back</button>
                </div>
            </form>
        </section>
        <Footer />
        </>
    );
};