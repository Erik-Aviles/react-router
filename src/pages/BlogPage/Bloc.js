import React from 'react';
import { BlogLink } from '../../components/BlogLink';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../provider/AuthProvider';
import { ButtonAddPost } from '../../components/Buttons';

const BlogPage = () => { 

  const {auth, post} = useAuth(); 
  const posts = post.posts; 

  const canAdd = auth.user?.isCreator?.name || auth.user?.isAdmin?.name;
  return (
    <div>
      <h1>Blog </h1> 
      {
        auth.user?.userName && 
        <p>{`User: (${auth.user?.userName})`} 
            {auth.user?.isAdmin?.name && ` es Administrador`}
            {auth.user?.isAnality?.name && ` es Analizador`}
            {auth.user?.isCreator?.name && ` es Creador`}
          </p>
      }
      {canAdd && (
        <ButtonAddPost> Agregar post</ButtonAddPost>
        )}
      {
        posts.length === 0 && (
          <p> No hay post publicados...</p>
        )
      } 
      <ul>
        {posts.map(post =>(
          <BlogLink
            key={post.id} 
            post={post}
            />
            ))}
      </ul>
      <Outlet />
 
    </div>
  )
}



export {BlogPage};
