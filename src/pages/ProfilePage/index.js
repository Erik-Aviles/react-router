import React from 'react';
import { useAuth } from '../../provider/AuthProvider';

const ProfilePage = () => {

  const{ auth } = useAuth();
  return (
    <nav className='navbar navbar-dark bg-dark mb-4' >
      <div className='container'>
        <span className='navbar-brand'>Hola,  {auth.user?.userName}</span>
      </div>
    </nav>
  )
}

export {ProfilePage};
