import React from 'react';
import { BlogLink } from '../components/BlogLink';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../provider/AuthContext';
import { ButtonAddPost } from '../components/Buttons';
import { usePost } from '../provider/PostContext';

const BlogPage = () => { 

  const { user } = useAuth(); 
  const { posts } = usePost();
  

  const canAdd = user?.isCreator?.name || user?.isAdmin?.name;
  return (
    <div>
      <h1>Blog </h1> 
     
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
