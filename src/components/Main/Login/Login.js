import { Formulario } from '../Specials/Formulario/Formulario'
import { getUser } from '../../store/slices/users'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export const Login = ()=>{
  const users = useSelector(state=>state.users)
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(Object.keys(users.active).includes("email"))
      navigate("/")
    
  },[users.active])

    return (  
    <Formulario Title="WELCOME BACK !!!" Action={getUser}/>
  )
}

