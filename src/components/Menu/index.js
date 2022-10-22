import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map(route => (
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
        ))}
      </ul>
    </nav>
  );
}

const  routes = [];
routes.push({
  to: '/',
  text: 'Home',
});
routes.push({
  to: '/blog',
  text: 'Blog',
});
routes.push({
  to: '/profile',
  text: 'Profile',
});
routes.push({
  to: '/login',
  text: 'Login',
});
routes.push({
  to: '/logout',
  text: 'Logout',
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