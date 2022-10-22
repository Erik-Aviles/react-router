import React from 'react';
import { useAuth } from '../auth';

const ProfilePage = () => {

  const auth = useAuth();
  return (
    <div>
       <h1>Perfil</h1>
       <p>Welcome, {auth.user.userName}</p>
    </div>
  )
}

export {ProfilePage};
