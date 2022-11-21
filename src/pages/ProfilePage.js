import React from 'react';
import { useAuth } from '../provider/AuthContext';

const ProfilePage = () => {

  const { user } = useAuth()
  return (
    
      <div className='container'>
        <h2 className='navbar-brand'>Tus datos</h2>
        <p>Nombre: {user.name}</p>
        <p>Apellido: {user.apellido}</p>
        <p>Peliculas favoritas: {user.favoriteMovies}</p>
      </div>

  )
}

export {ProfilePage};
