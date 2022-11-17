import React from 'react'
import { useAuth } from '../provider/AuthContext';

const LogoutPage = () => {

  const{ logout }= useAuth();
  
  const onLogout = (e) =>{
    e.preventDefault();
    logout()
  }
  
  return (
    <>
      <h1>Cerrar cesion</h1>

      <form onSubmit={onLogout}>
        <label>Quieres salir? </label>
        <button type='submit'>Salir</button>
        </form> 
    </>
  );
}

export { LogoutPage };
