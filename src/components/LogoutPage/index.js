import React from 'react'
import { useAuth } from '../auth';

const LogoutPage = () => {

  const{ auth }= useAuth();
  
  const onLogout = (e) =>{
    e.preventDefault();
    auth.logout()
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
