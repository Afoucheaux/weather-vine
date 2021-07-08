import React from 'react';
import './Header.css';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  return (
    <section className='headerLayout'>
      <h1 className='title'>Weather Vine!</h1>
      {isLoading && <p>Loading...</p>}
      {isAuthenticated && !isLoading && <p>{user.name}</p>}
    </section>
  )
}

export default Header;
