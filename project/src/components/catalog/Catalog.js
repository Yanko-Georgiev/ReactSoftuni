import { Header } from '../Header';
import { Footer } from '../Footer';

import { useContext,useEffect } from 'react';

import { MovieContext } from '../../contexts/MovieContext'
import { CatalogItem } from './CatalogItem';

export const Catalog = () =>{
    const { movies } = useContext(MovieContext)
    useEffect(()=>{document.getElementById('catalog').classList.add('active')},[])
    
    return(
        <>
        <Header/>
        
            <div id="main">
                <div id="content">
                    <div className="box">
                        <div className="head_catalog">
                            <h2>IN MOVIE THEATERS RIGHT NOW</h2>
                        </div>
                        {movies.length > 0
                            ? movies.map(movie => <CatalogItem key={movie._id} movie={movie} />)
                            : <h3>THERE'S NO MOVIES TO SHOW</h3>
                        }
                        <div className="head_catalog">
                            <h2>COME BACK LATER FOR MORE!</h2>
                        </div>
                    </div>
                </div>
                <div className="cl">&nbsp;</div>
            </div>
        <Footer/>
        </>
    )
}