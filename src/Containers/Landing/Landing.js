import React from 'react';
import './Landing.css';
import Header from '../../Components/Header/Header'
import AuthForm from '../../Components/AuthForm/AuthForm'

const Landing = () => {
  return (
    <>
      <Header />
      <AuthForm />
      <main className='loginLayout'>
        <section className='loginCard'>
          <h2>Learn all about Weather Vine Here:</h2>
          <p>Weather Vine is an educational app for consumers to connect more deeply with the wine they enjoy. Explore wines from a region and see how the climate has influenced the very wine one drinks!</p>
          <button>Register/Login with Google</button>
        </section>
      </main>
    </>
  )
}

export default Landing;
