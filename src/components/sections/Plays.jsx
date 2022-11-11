import {useState} from 'react'
const Plays = () =>{
    const [plays, setPlays] = useState([
        {id: 1, title: "New game tile"},
        {id: 2, title: "New game tile"},
        {id: 3, title: "New game tile"},
        {id: 4, title: "New game tile"},
        {id: 5, title: "New game tile"},
        {id: 6, title: "New game tile"},
        {id: 7, title: "New game tile"}])

    return(
        <>
        {plays.map(el =>  
        <article className="game-section">
            <h1 className="game-title">{el.title}</h1>
            <img className="game-image" src="" alt="Картинка игры" />
            <button className="play-button">Играть</button>
        </article>)}
        </>
    );
}

export default Plays;