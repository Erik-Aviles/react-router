import React from 'react';
import { BlogLink } from '../BlogLink';
import { blogData } from '../blogData';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../auth';

const BlogPage = () => { 
  const auth = useAuth();
  
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
        {blogData.map(post =>(
          <BlogLink
          key={post.slug} post={post}/>
          ))}
      </ul>
      <Outlet />
      
    </div>
  )
}



export {BlogPage};
