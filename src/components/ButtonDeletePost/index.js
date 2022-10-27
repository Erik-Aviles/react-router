import React from 'react';
import { useAuth} from '../auth';


const ButtonDeletePost = () => {
  const { post } = useAuth()
 
  return (
    <button onClick={post.eliminarPost}>
      Eliminar post
    </button>
  )
}

export { ButtonDeletePost };
