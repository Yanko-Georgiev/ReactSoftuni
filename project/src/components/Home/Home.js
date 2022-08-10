
import { Header } from '../Header';
import { Footer } from '../Footer';

import { useContext,useEffect } from 'react';

import { MovieContext } from '../../contexts/MovieContext'
import { TopRatedMovies } from './TopRatedMovies';
import { NewsContext } from '../../contexts/NewsContext';
import { News } from './News';
import { Link } from 'react-router-dom';

export const Home=()=>{
    const { movies } = useContext(MovieContext)
    const { news } =useContext(NewsContext)
    useEffect(()=>{document.getElementById('home').classList.add('active')},[])
    let moviesL=movies.length;
    let newMovies=movies.slice(moviesL-3,moviesL)
    let newsL=news.length;
    let newNews=news;
    if (newsL>6) {
      newNews=news.slice(newsL-6,newsL)
    }
    return(
    <>
        <Header/>
        <div id="main">
          <div id="content">
            <div className="box">
              <div className="head">
                <h2>RECENTLY ADDED MOVIES</h2>
              </div>
              {movies.length > 0
                ? newMovies.map(movie => <TopRatedMovies key={movie._id} movie={movie} />)
                : <h3>THERE'S NO MOVIES TO SHOW</h3>
              }
              <div className="cl">&nbsp;</div>
            </div>
          </div>
          <div className="head">
              <h3>
                NEWS<strong>!</strong>
              </h3>
            </div>
          <div id="coming">
            {news.length > 0
              ? newNews.map(news => <News key={news._id} news={news} />)
              : <h3>THERE'S NO NEWS TO SHOW</h3>
            }
          </div>
          <div className="more_news"><Link to={'/news'}>SEE MORE NEWS</Link></div>
          <div className="cl">&nbsp;</div>
        </div>
        <Footer/>
    </>
    )
}