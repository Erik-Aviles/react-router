import React, { createContext, useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const navegate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({userName}) => {
    setUser({userName});
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
  console.log(auth)
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
