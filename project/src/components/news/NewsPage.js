import { Footer } from "../Footer"
import { Header } from "../Header"
import { useContext, useEffect } from "react"
import { NewsContext } from "../../contexts/NewsContext"
import { NewsPageItem } from "./NewsPageItem"

export const NewsPage=()=>{
    const { news } = useContext(NewsContext)
    useEffect(()=>{document.getElementById('news').classList.add('active')},[])
    return(<>
        <Header />
                    <div className="head_news">
                        <h2>NEWS</h2>
                    </div>
                        {news.length > 0
                            ?<>
                            <div className="news_box head_catalog">
                                {news.map(news => <NewsPageItem key={news._id} news={news} />)}
                            </div>
                            </> 
                            :<div className="head_catalog"><h2>THERE'S NO NEWS</h2></div> 
                        }
                    <div className="head_catalog">
                        <h2>COME BACK LATER FOR MORE!</h2>
                   
            <div className="cl">&nbsp;</div>
        </div>
        <Footer />
    </>)
}