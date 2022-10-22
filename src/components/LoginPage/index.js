import React, { useState } from 'react'
import { useAuth } from '../auth';

const LoginPage = () => {
const auth = useAuth();
  const [ userName, setUserName ] = useState('');

  const onhandleChange = (event) => {
    setUserName(event.target.value);
    console.log(userName)
  }
  const login = (e) => {
    e.preventDefault();
    auth.login({userName});
  }

  return (
    <>
     <h1> Login</h1>

     <form onSubmit={login}>
      <label>Escribe tu nombre de usuario: </label>
      <input onChange={onhandleChange} placeholder='Usuario' value={userName}/>
      <button type='submit'>Entrar</button>
      </form> 
    </>
  )
}

export { LoginPage };
