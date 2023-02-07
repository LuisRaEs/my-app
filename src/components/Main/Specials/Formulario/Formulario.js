import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../images/logo1.png'
import { Check } from '../Check/Check'
import './Formulario.css'

export const Formulario = ({Title , Action}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [info,setInfo] = useState({email:"",password:"", validate:{email:false,password:false}})
  const [showCheck, setShowCheck] = useState({email:false,password:false})
  

  const handleChange = (target)=>{
    if(Title!=="REGISTER")
      setInfo((state)=>{
        return {...state,[target.id]:target.value,validate:{...state.validate,[target.id]:true}}
      })
    else
    {
      const regex = target.id==="email" ?  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i : /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,63})$/
      setShowCheck((state)=>{
        if(target.value.length>0)
          return {...state,[target.id]:true}
        else
          return {...state,[target.id]:false}
      })
      setInfo((state)=>{
        return {...state,[target.id]:target.value,validate:{...state.validate,[target.id]:regex.test(target.value)}}
      })
    }
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    dispatch(Action({email:info.email,password:info.password}))
    if(Title==="REGISTER")
    {
      alert("Por favor inicie sesión")
      navigate("/user/login")
    }
  }
    return ( 
      <div className='user-form'>
      <figure>
        <img src={logo} alt="WELCOME"/>
      </figure>

      <form onSubmit={(e)=>{handleSubmit(e)}}>
        {/*Titulo*/}
        <h1>{Title}</h1>

        {/*Email*/}
        <div className='fcontainer'>
          <div className='fdata'>
            <label htmlFor='email'>E-MAIL: </label>
            <input 
              onChange={e=>handleChange(e.target)}
              type='email'
              placeholder='example@mail.com'
              id="email"
              value={info.email}/>
          </div>
          <div className='for-register' style={{display: (Title==="REGISTER" && showCheck.email)? "flex": "none"}}>
            <Check validation={info.validate.email}/>
          </div>
        </div>

        {/*Password*/}
        <div className='fcontainer'>
          <div className='fdata'>
            <label htmlFor='pass'>PASSWORD: </label>
            <input
              onChange={e=>handleChange(e.target)}
              type='password'
              placeholder='password'
              id="password"
              value={info.password}/>
          </div>
          <div className='for-register' style={{display: (Title==="REGISTER" && showCheck.password)? "flex": "none"}}>
            <Check validation={info.validate.password}/>
            <p className='information' onClick={()=>alert(`La contraseña debe contener:
    \u{25CF} Almenos una mayúscula
    \u{25CF} Almenos un número
    \u{25CF} Longitud mínima de 8 caracteres`)}>i</p>
          </div>
        </div>

        {/*Button*/}
        <input 
          type = "submit" 
          value = "SUBMIT" 
          id = "submit-button"
          className= {(info.validate.email && info.validate.password)? "clickable": "not-clickable"}
          disabled = {!(info.validate.email && info.validate.password)}
        />

        {/*Link to Register*/}
        <Link to="/user/singup" 
          style={{ display: Title!=="REGISTER" ? "flex" : "none" }}> 
          Sing Up here!!
        </Link>
      </form>
    </div>
  ) 

}
