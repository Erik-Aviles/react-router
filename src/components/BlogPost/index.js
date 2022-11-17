import React from 'react';
import { useParams, useNavigate, Link} from 'react-router-dom';
import { useAuth } from '../../provider/AuthProvider';

const BlogPost = () => {
  const { slug } = useParams();
  const navegate = useNavigate();
  console.log(slug)

  const { auth, post }= useAuth()
  const blogPost = post.posts.find(post => post.title.toLowerCase().split(" ").join("-") === slug);
  const canDelete = auth.user?.isAdmin?.name || auth.user?.isCreator?.name;
  const canRefresh = auth.user?.isAdmin?.name || auth.user?.isCreator?.name || auth.user?.isAnality?.name;
  
  const onDelete = () =>{
    post.eliminarPost(blogPost?.title)
    navegate('/blog')
  }
  const onEdith = () =>{
    post.setEdithPost(blogPost);
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
