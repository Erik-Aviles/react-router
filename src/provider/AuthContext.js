import React, { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { adminList, creatorList, analystList } from '../const/rolesAdmin';

const AuthContext = createContext();


const AuthProvider = ({children}) => {
  
  const navegate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null)
  const [successMessagge, setSuccessMessagge] = useState(null)

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
 
  const data = {user, login, logout, error, setError, successMessagge, setSuccessMessagge}

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = (children) => {
  const data  = useContext(AuthContext);
  return data;
}

const AuthRouter = ( props ) => {
  const{ user } = useAuth();
  if (!user) {
    return <Navigate to='/login'/>
  } else {
    return props.children
  }

}

export { AuthProvider , useAuth, AuthRouter};
