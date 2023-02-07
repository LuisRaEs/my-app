import { useState } from "react";
import './SearchBar.css'

export function  SearchBar() {
  const [search, setSearch] = useState("")

  return (  
    <div className="searchbar">
      <input type="text"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
              id="search"
              placeholder="TÍTULO"/>
      <input type="button"
              id="searchButton"
              value="SEARCH"/>
    </div>
  )
}

