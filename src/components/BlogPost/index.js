import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogData } from '../blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const navegate = useNavigate();

  const blogPost = blogData.find(post => post.slug === slug);
  
  const onReturnBlog = () => {
    navegate('/blog');
  }
  return (
    <>
      <h2>{blogPost.title}</h2>
      <button onClick={onReturnBlog}>
        Lista de blog
      </button>
      <p>{blogPost.author}</p>
      <p>{blogPost.content}</p>
    </>
  );
}

export { BlogPost };
