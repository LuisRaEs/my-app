import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { createStars } from '../../modules/createStars'
import { checkValue } from '../../modules/checkValue'
import notImage from '../../../images/NotFound.jpg'
import { addFavotie , removeFavorite } from '../../store/slices/users'

import './Card.css'

export function Card({ title , poster, genre, rating, id}) {
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users)


    const handleLike=()=>{
        dispatch(addFavotie(id))
    }

    const handleUnlike=()=>{
        dispatch(removeFavorite(id))
    }

    return (
        <div className="card">
        <Link to = {`/movie/${id}`} class="card-content">
            <figure>
                <img src={checkValue(poster,notImage)} alt={title}/>
            </figure>            
            <div className="card-data">
                <h2>{title.length<40? title : `${title.slice(0,37)} ...` }</h2>
                <p>Rating: {createStars(checkValue(rating,1))}</p>
                <p>Genre: {genre.length<13? genre : `${genre.slice(0,13)} ...`}</p>
            </div>
        </Link>
        <div id='liked' style={{display: users.logged? "flex":"none"}}>
                { users.logged && users.active.favorites.includes(id)? 
                <p onClick={()=>handleUnlike()}>{"\u{2764}"}</p> : 
                <p onClick={()=>handleLike()}>{"\u{1F49B}"}</p>}
        </div>
        </div>
    );
}


//Object.keys(users.active).length>0