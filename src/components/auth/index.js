import React, { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { adminList, creatorList, analystList } from '../administratorsRoles';
import { blogData } from '../blogData';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const navegate = useNavigate();
  const [user, setUser] = useState(null);

  const [posts, setPosts ]= useState(blogData);

  const eliminarPost = (title)=>{ 
    const newPosts = posts.filter(post => post.title !== title);
    setPosts(newPosts);
  };

  const addPost = (post) => {
    const newPosts = {
      ...post,
    }
    const changePosts = [
      ...posts,
      newPosts,

    ]
    setPosts(changePosts)
  }
  useEffect(()=>{
    navegate('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
/*   const addPost = (post) => {
    const newPosts = [
      ...posts,
  ]
    newPosts.push(post)
    setPosts(newPosts)
  } */


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
 
  const post = {posts, eliminarPost, addPost}
    const auth = {user, login, logout};
  return (
    <AuthContext.Provider value={{auth, post}}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = (children) => {
  const{ auth, post} = useContext(AuthContext);
  return {auth, post};
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
