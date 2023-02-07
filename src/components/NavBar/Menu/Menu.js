import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { quitUser } from "../../store/slices/users"
import './Menu.css'

export function Menu() {
  const users = useSelector(state=>state.users)
  const dispatch = useDispatch()


  if(users.active.email)
    return (
      <div className="menu">
              <Link to="/app/about">ABOUT</Link>
              <Link to="/user/favorites">FAVORITES</Link>
              <Link to="/" onClick={()=>dispatch(quitUser())}>LOGOUT</Link>
      </div>
    )
  else
    return (  
      <div className="menu">
              <Link to="/app/about">ABOUT</Link>
              <Link to="/user/login">LOGIN</Link>
      </div>
    )
}

