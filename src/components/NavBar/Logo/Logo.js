import logoimg from './Logo.png'
import {Link} from "react-router-dom"
import './Logo.css'

export function Logo() {
  return (  
    <>
      <figure>
        <Link to="/">
          <img src={logoimg} alt="Logo"/>
          <figcaption>MovieTube</figcaption>
        </Link>
      </figure>
    </>
  );
}

