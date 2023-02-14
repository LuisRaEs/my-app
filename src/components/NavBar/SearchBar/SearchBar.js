import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SearchBar.css'

export function  SearchBar() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const handleClick = ()=>{
    navigate(`/search?s=${search}`)
    setSearch("")
  }
  return (  
    <div className="searchbar">
      <input type="text"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
              id="search"
              placeholder="TÍTULO"/>
      <input type="button"
              onClick={()=>handleClick()}
              id="searchButton"
              value="SEARCH"/>
    </div>
  )
}

