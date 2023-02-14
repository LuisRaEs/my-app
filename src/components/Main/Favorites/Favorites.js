import { useSelector } from 'react-redux'
import { useState , useEffect } from 'react'
import { ViewPage } from '../../Main/Specials/ViewPage/ViewPage.js'
import { searchFavorites } from '../../modules/searchFavorites.js'

export const Favorites = () =>{
  const {db} = useSelector(state=>state.movies)
  const {favorites} = useSelector(state=>state.users.active)
  const [ favs , setFavs] = useState([])
  useEffect(()=>{
    setFavs(searchFavorites(db,favorites))
  },[favorites])
  return(
    <ViewPage title="Favorites" data={favs} />
    
  )
}