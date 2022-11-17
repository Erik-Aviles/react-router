import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';
import './Menu.css'

const Menu = () => {
  const{ user } = useAuth();
  return (
    <nav className='navbar navbar-dark bg-dark mb-2' >
      <div className='container'>
        { !user
          ? <span className='navbar-brand'>
              Bienvenid@
            </span>
          : user?.userName && 
              <span className='navbar-brand'>
                {`Hola, ${user?.userName}`} 
                  {user?.isAdmin?.name && ` (Administrador)`}
                  {user?.isAnality?.name && ` (Analizador)`}
                  {user?.isCreator?.name && ` (Creador)`}
              </span>
        }

        <ul className='nav'>
          {routes.map(route => {
          if (route.publicOnly  && user ) return null;
          if (route.private  && !user ) return null;
          return (
            <li
              className='p-4'
              key={route.to}>
              <NavLink 
                end
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue'
                })}
                to={route.to}
                >
                  {route.text}
              </NavLink>
            </li>
            )
          } )}
        </ul>
      </div>
     
    </nav>
  );
}

const  routes = [];
routes.push({
  to: '/',
  text: 'Home',
  private: false,

});
routes.push({
  to: '/blog',
  text: 'Blog',
  private: false,

});
routes.push({
  to: '/movie',
  text: 'Peliculas',
  private: false,

});
routes.push({
  to: '/profile',
  text: 'Tu perfil',
  private: true,

});
routes.push({
  to: '/login',
  text: 'Iniciar sesion',
  private: false,
  publicOnly: true,
});
routes.push({
  to: '/logout',
  text: 'Cerrar sesion',
  private: true,

});

export { Menu };

// Opcion de componente para RUTEAR 
/* <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/blog">Blog</Link>
    </li>
    <li>
    <Link to="/profile">Profile</Link>
    </li>
 */

//Opcion de componente para RUTEAR 
/*   <li>
    <NavLink 
      style={({ isActive }) => ({
        color: isActive ? "red" : "blue",
      })}
      to="/">Home</NavLink> 
    </li>
    <li>
    <NavLink 
      style={({ isActive }) => ({
        color: isActive ? "red" : "blue",
      })}
      to="/blog">Blog</NavLink>
    </li>
    <li>
    <NavLink 
      style={({ isActive }) => ({
        color: isActive ? "red" : "blue",
      })}
      to="/profile">Profile</NavLink>
    </li>
*/