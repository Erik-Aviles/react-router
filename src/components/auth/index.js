import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const navegate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({userName}) => {
    setUser({userName});
    navegate('/profile')
  }
  const logout = () => {

    navegate('/login')
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

export { AuthProvider , useAuth};
