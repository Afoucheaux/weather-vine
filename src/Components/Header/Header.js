import React from 'react';
import './Header.css';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth0()

  return (
    <section className='headerLayout'>
      <h1 className='title'>Weather Vine!</h1>
      {isAuthenticated && <p className='userName'>{user.name}</p>}
      <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
    </section>
  )
}

export default Header;
