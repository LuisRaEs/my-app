import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { GenreContainer } from "./GenreContainer/GenreContainer"
import { findGenre } from "../../modules/findGenres"
import { ShowMore } from "../Specials/ShowMore/ShowMore"
import './Home.css'

export function Home() {
  const {db} = useSelector(state=>state.movies)  
  const [genres,setGenres] = useState([])
  const [cant,setCant] =useState(5)
  useEffect(()=>{
    const response = findGenre(db)
    console.log(response);
    setGenres(response)
  },[])

  const handleClick = ()=>{
    setCant((state)=>state+5)
  }
  
  return (  
    <div className="home">
      {
        genres.map((el,i)=>{
          if(i<cant)
            return (
              <GenreContainer genre={el} key={i}/>
        )})
      }
      <div id = "extra">
      { cant<=genres.length?
        <ShowMore onClick={handleClick}/>: <></>
      }
      </div>
    </div>
  )
} 
