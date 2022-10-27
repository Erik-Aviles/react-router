import React from 'react';
import { useAuth } from '../auth';

const ProfilePage = () => {

  const{ auth } = useAuth();
  return (
    <div>
       <h1>Pagina del perfil</h1>
       <p>Iniciado sesion como: {auth.user?.userName}</p>
    </div>
  )
}

export {ProfilePage};
