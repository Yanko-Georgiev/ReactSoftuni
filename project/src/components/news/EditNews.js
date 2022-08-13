import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import * as newsService from '../../services/newsService';
import { NewsContext } from "../../contexts/NewsContext";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const EditNews = () => {
    const [currentNews, setCurrentNews] = useState({});
    const { newsEdit } = useContext(NewsContext);
    const { newsId } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{document.getElementById('news').classList.add('active')},[])

    useEffect(() => {
        newsService.getOne(newsId)
            .then(newsData => {
                setCurrentNews(newsData);
            })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        const newsData = Object.fromEntries(new FormData(e.target));

        newsService.edit(newsId, newsData)
            .then(result => {
                newsEdit(newsId, result);
                navigate(`/news`)
            });
    };

    return (
        <>
        <Header />
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit News</h1>
                    <label htmlFor="title">News title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentNews.title} />
                    
                    <label htmlFor="img">Image:</label>
                    <input type="text" id="img" name="img" defaultValue={currentNews.img} />
                    <label htmlFor="description">News text:</label>
                    <textarea name="description" id="description" defaultValue={currentNews.description} />
                    <input className="btn" type="submit" value="Edit News" />
                    <button onClick={(e)=>{e.preventDefault();navigate((`/news`))}} className="btn">Go back</button>
                </div>
            </form>
        </section>
        <Footer />
        </>
    );
}
