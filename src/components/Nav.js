import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <NavLink to='/new' activeClassName='active'>
          New Tweet
        </NavLink>
        <li></li>
      </ul>
    </nav>
  );
}
