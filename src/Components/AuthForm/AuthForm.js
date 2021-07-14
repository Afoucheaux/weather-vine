import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './AuthForm.css'

const AuthForm = () => {
  const { loginWithRedirect, isLoading, logout } = useAuth0();
  return (
    <section className='loginLayout'>
      {isLoading && <p>Loading...</p>}
      <article className='loginCard'>
        <h2>Learn all about Weather Vine Here:</h2>
        <p>Weather Vine is an educational app for consumers to connect more deeply with the wine they enjoy. Explore wines from a region and see how the climate has influenced the very wine one drinks!</p>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        
      </article>
    </section>
  )
};

export default AuthForm;
