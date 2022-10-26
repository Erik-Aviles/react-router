import React, { createContext, useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const adminList = ['heinert', 'andy', 'erik'];
const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const navegate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({userName}) => {
    const isAdmin = adminList.find(admin => admin === userName);
    setUser({userName, isAdmin});
    navegate('/profile');
  }
  const logout = () => {
    setUser(null);
    navegate('/')
  }
    const auth = {user, login, logout};
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = (children) => {
  const auth = useContext(AuthContext);
  return auth;
}

const AuthRouter = ( props ) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to='/login'/>
  } else {
    return props.children
  }

}

export { AuthProvider , useAuth, AuthRouter};
