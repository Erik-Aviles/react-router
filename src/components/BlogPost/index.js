import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../blogData';
import { ButtonReturn } from '../ButtonReturn';
import { useAuth } from '../auth'

const BlogPost = () => {
  const { slug } = useParams();

  const auth = useAuth()
  const blogPost = blogData.find(post => post.slug === slug);
  const canDelete = auth.user?.isAdmin || blogPost.author === auth.user?.userName;

  return (
    <>
      <h2>{blogPost.title}</h2>
      {canDelete && (
      <button> Eliminar post</button>
      )}
      <ButtonReturn>Atras</ButtonReturn>
      <p>{blogPost.author}</p>
      <p>{blogPost.content}</p>

    </>
  );
}

export { BlogPost };
