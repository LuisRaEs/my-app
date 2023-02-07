import { useState } from 'react';
import './NavBar.css'
import {Logo} from './Logo/Logo.js'
import { SearchBar } from "./SearchBar/SearchBar";
import { Menu } from "./Menu/Menu";


export function NavBar() {
  const [mobileM, setMobileM] = useState(false)

  const handleMobileMenu = ()=>{
    setMobileM((state)=>!state)
  }

  return (  
    <div className = 'navbar'>
      <Logo/>
      <div id='web-bar'>
        <SearchBar/>
        <Menu/>
      </div>
      <div id='mobile-bar'>
        <p id='menu-logo' onClick={()=>handleMobileMenu()}>{`\u{2630}`}</p>
        <div id='drop-bar' style={{display: mobileM? "flex": "none"}}>
          <SearchBar/>
          <Menu/>
        </div>
      </div>
    </div>
  );
}

