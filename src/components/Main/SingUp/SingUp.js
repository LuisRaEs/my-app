import { Formulario } from '../Specials/Formulario/Formulario'
import { addUser } from '../../store/slices/users'
import './SingUp.css'

export const SingUp = ()=>{
  return (  
    <Formulario Title="REGISTER" Action={addUser}/>
  )
}
