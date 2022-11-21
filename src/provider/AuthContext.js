import React, { createContext, useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { adminList, creatorList, analystList } from '../const/rolesAdmin';
import { helpHttp } from '../helpers/helpHttp';

const AuthContext = createContext();


const AuthProvider = ({children}) => {
  
  const navegate = useNavigate();
  const [user, setUser] = useState([]);
  console.log(user)
  const [error, setError] = useState(null);
  const [successMessagge, setSuccessMessagge] = useState(null);

  let url = 'http://localhost:8080/persons'
  let api = helpHttp(url);
  

  useEffect(()=>{
    api.get(url)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setUser(res)
        }else {
          setUser(null)
        }
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  useEffect(()=>{
    navegate('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const login = ({userName}) => {
    

    const isAdmin = adminList.find(admin => admin.name === userName);
    const isCreator = creatorList.find(creator => creator.name === userName);
    const isAnality = analystList.find(isAnality => isAnality.name === userName);
    setUser({  userName , isAdmin, isAnality, isCreator})
    navegate('/profile');
    console.log(isAdmin)
  }
  
  const logout = () => {
    setUser(null);
    navegate('/')
  }

  const addUser = (use) => {
    use.id = Date.now();
    setUser([...user, use]);
  }

  const toogleFavoriteMovieToUser = (moviId) =>{
  }

 
  const data = {user, login, logout, addUser, error, setError, successMessagge, setSuccessMessagge, toogleFavoriteMovieToUser}

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
