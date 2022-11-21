import React, { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthContext';

const LoginPage = () => {

  const navegate = useNavigate()
  const { user, login, successMessagge, setSuccessMessagge } = useAuth();
  const [ userName, setUserName ] = useState('');
  
  
  
  const onhandleChange = (event) => {
    setUserName(event.target.value);   
  }


  const Login = (e) => { 
    const isName = user?.find(user => user?.name === userName);
    e.preventDefault();
    if (userName === '') {
    alert('Espacio en blanco')
   }else if (isName){
     login({userName});
   }else{
    setSuccessMessagge("Usuario no registrado")
   }
   setTimeout(()=> {
    setSuccessMessagge(null)
    navegate('/login');
}, 2000);
  }
 
  

  if (user) {
    return <Navigate to='/profile'/>
  }
  return (
    <>
    
     <h1> Login</h1>

     <form onSubmit={Login}>
      { successMessagge && (<p> {successMessagge} </p>) }
      <label>Escribe tu nombre de usuario: </label>
      <input onChange={onhandleChange} placeholder='Usuario' value={userName}/>
      <button type='submit'>Iniciar sesion</button>
      </form> 
      <button onClick={() => navegate('/login/register')}>Registrarse</button>

      <Outlet />
      
    </>
  )
}

export { LoginPage };
