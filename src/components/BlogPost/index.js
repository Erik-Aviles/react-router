import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../blogData';
import { ButtonReturn } from '../ButtonReturn';
import { useAuth } from '../auth'

const BlogPost = () => {
  const { slug } = useParams();

  const auth = useAuth()
  const blogPost = blogData.find(post => post.slug === slug);
  /* const canDelete = auth.user?.userRoles || blogPost.author === auth.user?.userName; */
  const canDelete = auth.user?.isAdmin?.name;
  const canAdd = auth.user?.isAnality?.name;
  const canRefresh = auth.user?.isCreator?.name;

  return (
    <> <h2>{blogPost.title}</h2>
      <p>{`Escrito por:  ${blogPost.author}`}</p>
      <p>{blogPost.content}</p>
      
      {canDelete && (
      <button> Eliminar post</button>
      )}
      {canAdd && (
        <button>Agregar post</button>
        )}
      {canRefresh && (
        <button> Actualizar post</button>
        )}
      <ButtonReturn>Atras</ButtonReturn>
     

    </>
  );
}

export { BlogPost };
