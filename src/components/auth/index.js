import React, { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { adminList, creatorList, analystList } from '../administratorsRoles';
import { blogData } from '../blogData';

const AuthContext = createContext();
const localPosts = JSON.parse(localStorage.getItem('POSTS_1'))

const AuthProvider = ({children}) => {
  
  const navegate = useNavigate();
  const [user, setUser] = useState(null);

  const [posts, setPosts ]= useState(localPosts ||blogData);
  const [edithPost, setEdithPost ]= useState(null);
  const [error, setError] = useState(null)
  const [successMessagge, setSuccessMessagge] = useState(null)

  useEffect(()=>{
    localStorage.setItem('POSTS_1', JSON.stringify(posts))
  }, [posts])

  const eliminarPost = (title)=>{ 
    const newPosts = posts.filter(post => post.title !== title);
    setPosts(newPosts);
  };

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
  const updatePost = (edithpost) => {

    const changePosts = posts.map(post =>(
      post.id === edithpost.id
      ? edithpost
      : post
    ) )
    setPosts(changePosts);

  }
  
/*   const addPost = (post) => {
    const newPosts = [
      ...posts,
  ]
    newPosts.push(post)
    setPosts(newPosts)
  } */

  useEffect(()=>{
    navegate('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  const login = ({userName}) => {
    const isAdmin = adminList.find(admin => admin.name === userName);
    const isCreator = creatorList.find(creator => creator.name === userName);
    const isAnality = analystList.find(isAnality => isAnality.name === userName);
    setUser({userName , isAdmin, isAnality, isCreator})
    navegate('/profile');
  }
  
  const logout = () => {
    setUser(null);
    navegate('/')
  }
 
  const post = {posts, eliminarPost, addPost, edithPost, setEdithPost, updatePost}
  const auth = {user, login, logout};
  const messagges = {error, setError, successMessagge, setSuccessMessagge}

  return (
    <AuthContext.Provider value={{auth, post, messagges}}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = (children) => {
  const{ auth, post, messagges} = useContext(AuthContext);
  return {auth, post, messagges};
}

const AuthRouter = ( props ) => {
  const{ auth } = useAuth();
  if (!auth.user) {
    return <Navigate to='/login'/>
  } else {
    return props.children
  }

}

export { AuthProvider , useAuth, AuthRouter};
