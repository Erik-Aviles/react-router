import React from 'react';
import { BlogLink } from '../BlogLink';
/* import { blogData } from '../blogData'; */
import { Outlet } from 'react-router-dom';
import { useAuth } from '../auth';
import { ButtonAddPost } from '../Buttons';
/* import { ButtonReturn } from '../ButtonReturn'; */

const BlogPage = () => { 

  const {auth, post} = useAuth(); 
  const posts = post.posts; 

  const canAdd = auth.user?.isAnality?.name || auth.user?.isCreator?.name || auth.user?.isAdmin?.name;;
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
