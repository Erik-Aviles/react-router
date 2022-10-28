import React from 'react';
import { BlogLink } from '../BlogLink';
/* import { blogData } from '../blogData'; */
import { Outlet } from 'react-router-dom';
import { useAuth } from '../auth';

const BlogPage = () => { 
  const {auth, post } = useAuth();  

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
      <ul>
        {post.posts.map(postes =>(
          <BlogLink
            key={postes.slug} 
            postes={postes}
           /*  postDelete={post.eliminarPost} */
            />
            ))}
      </ul>
      <Outlet />
      
      
    </div>
  )
}



export {BlogPage};
