import './GenreContainer.css'
import { useSelector } from 'react-redux';
import { useState ,useEffect } from 'react';
import { Card } from '../../Cards/Card';
import { selectProp } from '../../../modules/selectProp';
import { Link } from 'react-router-dom';



export function GenreContainer({genre}) {
    let movies = useSelector(state=>state.movies.db)
    let [m, setM] = useState([])

    useEffect(()=>{
        const moviesbyGenre = selectProp(movies,"Genre",genre)
        setM(()=>moviesbyGenre.filter(el=>{
                if(el.Poster!=="N/A")
                    return el
            }).sort(() => Math.random() - 0.5).slice(0,20))  
    },[])
    return (
        <div id="genre-container">
            <div id="type-header">
                <Link to={`/genres/${genre.toLowerCase()}`}>
                    <h1>{genre}</h1>
                </Link>
            </div>
            <div id="type-body">
            {
                m.map((el)=>{
                    return (
                        <Card
                            title = {el.Title}
                            poster = {el.Poster}
                            genre = {el.Genre}
                            rating =  {el.imdbRating}
                            id = {el.imdbID}
                            key = {el.imdbID}
                        />
                )})
                }
            </div>
        </div>
    )
}
