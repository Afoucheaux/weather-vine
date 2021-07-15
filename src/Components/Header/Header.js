import React, { useContext } from 'react';
import './Header.css';
import { useAuth0 } from '@auth0/auth0-react';
import { StylingContext } from '../../Context/StylingContext'

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth0()
  const { toHide } = useContext(StylingContext);
  return (
    <section className='headerLayout'>
      <h1 className='title'>Weather Vine!</h1>
      {isAuthenticated && <p className='userName'>{user.name}</p>}
      <button className={`button ${toHide}`} onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
    </section>
  )
}

export default Header;
