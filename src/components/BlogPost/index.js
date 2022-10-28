import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { ButtonReturn } from '../ButtonReturn';
import { useAuth } from '../auth';



const BlogPost = () => {
  const { slug } = useParams();
  const navegate = useNavigate();

  const { auth, post }= useAuth()
  const blogPost = post.posts.find(post => post.slug === slug);
  /* const canDelete = auth.user?.userRoles || blogPost.author === auth.user?.userName; */
  const canDelete = auth.user?.isAdmin?.name;
  const canAdd = auth.user?.isAnality?.name;
  const canRefresh = auth.user?.isCreator?.name;
  
  const onDelete = () =>{
    post.eliminarPost(blogPost?.slug)
    navegate('/blog')
  }

  return (
    <> 
      <h2>{blogPost.title}</h2>
      <p>{`Escrito por:  ${blogPost.author}`}</p>
      <p>{blogPost.content}</p>

      {canDelete && (
        <button onClick={onDelete}>
          eliminar
        </button>
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
