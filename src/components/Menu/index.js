import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth';

const Menu = () => {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (route.publicOnly  && auth.user ) return null;
          if (route.private  && !auth.user ) return null;
          return (
            <li key={route.to}>
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
  to: '/profile',
  text: 'Profile',
  private: true,

});
routes.push({
  to: '/login',
  text: 'Login',
  private: false,
  publicOnly: true,
});
routes.push({
  to: '/logout',
  text: 'Logout',
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