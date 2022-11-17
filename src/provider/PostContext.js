import React, { createContext, useContext, useEffect, useState } from "react";
import { blogData } from '../const/blogData';

const PostContext = createContext();

const localPosts = JSON.parse(localStorage.getItem('POSTS_1'))

const PostProvider = ({children}) => {

  const [posts, setPosts ]= useState(localPosts || blogData);
  const [edithPost, setEdithPost ]= useState(null);


  const eliminarPost = (title)=>{ 
    const newPosts = posts.filter(post => post.title !== title);
    setPosts(newPosts);
  };

  useEffect(()=>{
    localStorage.setItem('POSTS_1', JSON.stringify(posts))
  }, [posts])

  const addPost = (post) => {
    const newPosts = {
      ...post,
    }
    const changePosts = [
      newPosts,
      ...posts,
    ]
    setPosts(changePosts)
  }

  /*   const addPost = (post) => {
    const newPosts = [
      ...posts,
  ]
    newPosts.push(post)
    setPosts(newPosts)
  } */

  const updatePost = (edithpost) => {

    const changePosts = posts.map(post =>(
      post.id === edithpost.id
      ? edithpost
      : post
    ) )
    setPosts(changePosts);
  }


  const data = {posts, eliminarPost, addPost, edithPost, setEdithPost, updatePost}

  return(
    <PostContext.Provider value={data}>
      {children}
    </PostContext.Provider>
  )
}

const usePost = (children) => {
  const posts = useContext(PostContext);
  return posts;
}

export { PostProvider, usePost };
export default PostContext;
