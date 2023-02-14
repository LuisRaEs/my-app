import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { ViewPage } from '../../Main/Specials/ViewPage/ViewPage.js'
import { selectProp } from '../../modules/selectProp.js'

export const SearchPage = () =>{
  const location = useLocation()
  const titulo = location.search.substring(3,location.search.length)
  const {db} = useSelector(state=>state.movies)
  const [ movies , setMovies] = useState([])
  useEffect(()=>{
    setMovies(selectProp(db,"Title",titulo))
  },[titulo])
  return(
    <ViewPage title={titulo} data={movies} />
    
  )
}