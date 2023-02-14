import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState , useEffect } from 'react'
import { selectProp } from '../../modules/selectProp'
import { ViewPage } from '../Specials/ViewPage/ViewPage'
import './GenrePage.css'


export const GenrePage = ()=>{
  const {db} = useSelector(state=>state.movies)
  const {page} = useParams()
  const [movies, setMovies] = useState([])
  const tit = page[0].toUpperCase()+page.slice(1,page.length)

  useEffect(()=>{
    const moviesbyGenre = selectProp(db,"Genre",page)
    setMovies(moviesbyGenre)
  },[])
  
  return (
    <ViewPage title={tit} data={movies}/>
  )
}
