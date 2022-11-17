import React from 'react';
import { useAuth } from '../provider/AuthContext';

const ProfilePage = () => {

  const{ user } = useAuth();
  return (
    <nav className='navbar navbar-dark bg-dark mb-4' >
      <div className='container'>
        <span className='navbar-brand'>Hola,  {user?.userName}</span>
      </div>
    </nav>
  )
}

export {ProfilePage};
