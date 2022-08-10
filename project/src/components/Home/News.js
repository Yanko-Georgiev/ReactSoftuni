
export const News=({news})=>{
    const pClickHandler=(e)=>{
        if (e.currentTarget.parentElement.className=='full') {
            e.currentTarget.parentElement.className='news'
        }else{
            e.currentTarget.parentElement.className='full'
        }
    }
    return(
        <div className="news">
            <h4>{news.title}</h4>
            <p onClick={pClickHandler}>{news.description}</p>
        </div>
    )
}