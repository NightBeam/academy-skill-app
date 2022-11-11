import { useState } from "react";

const News = () =>{
    const [news, setNews] = useState([
        {id: 1, title: "New", text:"Some text"},
        {id: 2, title: "New", text:"Some text"},
        {id: 3, title: "New", text:"Some text"},
        {id: 4, title: "New", text:"Some text"},
        {id: 5, title: "New", text:"Some text"},
        {id: 6, title: "New", text:"Some text"},
        {id: 7, title: "New", text:"Some text"}])
    return(
        <>
        {news.map((el)=>
            <article className="news-section">
               <h1 className="news-title" >{`${el.title} ${el.id}`}</h1>
               <img className="news-image" src="" alt="Какая-то картинка"/>
               <p className="news-text" >{`${el.text} ${el.id}`}</p>
           </article>
        )}
        </>
    );
}

export default News;