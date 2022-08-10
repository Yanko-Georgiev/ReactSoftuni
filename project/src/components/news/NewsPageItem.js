import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { NewsContext } from "../../contexts/NewsContext"
import * as newsService from '../../services/newsService'
export const NewsPageItem=({news})=>{
    const { user } = useContext(AuthContext);
    const { newsId } = useParams();
    const { newsRemove } = useContext(NewsContext);
    const navigate = useNavigate();

    const newsDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this game?');
        if (confirmation) {
            newsService.remove(news._id)
                .then(() => {
                    newsRemove(news._id);
                    navigate('/news');
                })
        }
    }
    return(
        <div className="news_card">
                <img src={news.img} alt="" />
                <h1>{news.title}</h1>
                <p>{news.description}</p>
                {user.email=='admin@abv.bg'
                ?<div className="news_btn">
                    <button onClick={(e)=>{e.preventDefault();navigate((`/news/${news._id}/edit`))}} className="btn">Edit</button>
                    <button onClick={newsDeleteHandler} className="btn">Delete</button>
                </div>
                :null
            }
        </div>
    )
}