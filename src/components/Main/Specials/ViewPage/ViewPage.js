import { useState , useEffect } from 'react'
import { Card } from '../../Cards/Card'
import { divideArray } from '../../../modules/divideArray'
import './ViewPage.css'

export const ViewPage= ({title,data}) =>{
  const [pages, setPages] = useState({all:[],active:0})
  const [m, setM] = useState({all:[],active:[]})

  useEffect(()=>{
    const [movies, npages] = divideArray(data)
    setM(()=>{
      return {all:movies,active:movies[0]}
    })
    setPages((state)=>{return {...state,all:npages}})
  },[data])

  const handleClick = (target)=>{
    setPages((state)=>{return {...state,active:target.value}})
    setM((state)=>{return {...state,active:[...state.all[target.value]]}})
  }

  return (  
    <div className='view-page'>
      <div id ="title-page">
        <h1>{title}</h1>
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