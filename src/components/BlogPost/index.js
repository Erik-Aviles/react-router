import React from 'react';
import { useParams, useNavigate, Link} from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';
import { usePost } from '../../provider/PostContext';

const BlogPost = () => {
  const { slug } = useParams();
  const navegate = useNavigate();

  const { auth }= useAuth();
  const { posts, eliminarPost, setEdithPost }= usePost();

  const blogPost = posts.find(post => post.title.toLowerCase().split(" ").join("-") === slug);
  const canDelete = auth.user?.isAdmin?.name || auth.user?.isCreator?.name;
  const canRefresh = auth.user?.isAdmin?.name || auth.user?.isCreator?.name || auth.user?.isAnality?.name;
  
  const onDelete = () =>{
    eliminarPost(blogPost?.title)
    navegate('/blog')
  }
  const onEdith = () =>{
    setEdithPost(blogPost);
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
        <button  onClick={onEdith}>
          <Link to={'/blog/edith-post'}> Editar post</Link></button>
      )}
    </>
  );
}

export { BlogPost };
