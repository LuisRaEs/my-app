import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState , useEffect } from 'react'
import { selectProp } from '../../modules/selectProp'
import { Card } from '../Cards/Card'
import { divideArray } from '../../modules/divideArray'
import './GenrePage.css'


export const GenrePage = ()=>{
  const {db} = useSelector(state=>state.movies)
  const {page} = useParams()
  const tit = page[0].toUpperCase()+page.slice(1,page.length)
  const [m, setM] = useState({all:[],active:[]})
  const [pages, setPages] = useState({all:[],active:0})

  useEffect(()=>{
    const moviesbyGenre = selectProp(db,"Genre",page)
    const [movies, npages] = divideArray(moviesbyGenre)
    setM(()=>{
      return {all:movies,active:movies[0]}
    })
    setPages((state)=>{return {...state,all:npages}})
  },[])

  const handleClick = (target)=>{
    console.log(target)
    setPages((state)=>{return {...state,active:target.value}})
    setM((state)=>{return {...state,active:[...state.all[target.value]]}})
  }

  return (  
    <div className='genre-page'>
      <div id ="title-page">
        <h1>{tit}</h1>
      </div> 
      <div id="pages-menu">
        {
          pages.all.map(el=>{
            return(
              <input 
                type="button"
                className = { pages.active==el? 'activebpage': 'bpage' }
                value={el}
                key={`p${el}`}
                onClick={(e)=>{handleClick(e.target)}}
              />
          )})
        }
      </div>    
      <div id="movies-container">
        {
          m.active.map(el=>{
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
