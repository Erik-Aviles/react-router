import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../provider/AuthProvider';

const LoginPage = () => {
  const {auth} = useAuth();
  const [ userName, setUserName ] = useState('');

  
  const onhandleChange = (event) => {
    setUserName(event.target.value);
      
  }
  const Login = (e) => {
    e.preventDefault();
   if (userName === '') {
    alert('Espacio en blanco')
   }else{
    auth.login({userName});
   }
  }

  if (auth.user) {
    return <Navigate to='/profile'/>
  }
  return (
    <>
     <h1> Login</h1>

     <form onSubmit={Login}>
      <label>Escribe tu nombre de usuario: </label>
      <input onChange={onhandleChange} placeholder='Usuario' value={userName}/>
      <button type='submit'>Iniciar sesion</button>
      </form> 
    </>
  )
}

export { LoginPage };