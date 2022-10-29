import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { useAuth } from '../auth';



const BlogPost = () => {
  const { slug } = useParams();
  console.log(slug)
  const navegate = useNavigate();

  const { auth, post }= useAuth()
  const blogPost = post.posts.find(post => post.title.toLowerCase().split(" ").join("-") === slug);
  /* const canDelete = auth.user?.userRoles || blogPost.author === auth.user?.userName; */
  const canDelete = auth.user?.isAdmin?.name || auth.user?.isCreator?.name;;
  const canRefresh = auth.user?.isAdmin?.name || auth.user?.isCreator?.name || auth.user?.isAnality?.name;
  
  const onDelete = () =>{
    post.eliminarPost(blogPost?.title)
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
      {canRefresh && (
        <button> Actualizar post</button>
        )}
      
     

    </>
  );
}

export { BlogPost };
