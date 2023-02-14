import { useParams } from "react-router-dom"
import { useSelector , useDispatch } from "react-redux"
import { useEffect } from "react"
import { getMovieDetail , cleanMovieDetail } from "../../store/slices/movies"
import { createStars } from "../../modules/createStars"
import { checkValue } from "../../modules/checkValue"
import "./Movie.css"
import notImage from "../../../images/NotFound.jpg"

export function Movie() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const detail = useSelector(state=>state.movies.movieDetail)

  useEffect(()=>{
    dispatch(getMovieDetail(id))
    return ()=>{dispatch(cleanMovieDetail())}
  },[])

  return (  
      <div id="movieContainer">
          <div id="title">
              <h1>{detail.Title}</h1>
          </div>
          <div id="media"> 
              <figure id="poster">
                  <img  src={checkValue(detail.Poster, notImage)}/>
              </figure>
              <figure id="mvideo">
                  <video src="#" controls />
              </figure>
          </div>
          <div id="data">
              <p>
                  <strong>Rating: </strong> {createStars(checkValue( detail.imdbRating,1))}
              </p>
              {
                Object.keys(detail).map(el=>{
                  if(el!=="Ratings" && el!=="Title" && el!=="Poster" &&el!=="Response" && !el.includes("imdb") && detail[el]!=="N/A" && detail[el]!=="None")
                      return(
                        <p key ={el} >
                          <strong>{el}:</strong> {detail[el]}
                        </p>
                      )
                })
              }
          </div>
      </div>
  )
}
