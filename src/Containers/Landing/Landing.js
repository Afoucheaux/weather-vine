import React, {useState, useEffect} from 'react';
import './Landing.css';
import Header from '../../Components/Header/Header'
import AuthForm from '../../Components/AuthForm/AuthForm'

const Landing = () => {
  return (
    <>
      <Header />
      <AuthForm />  
    </>
  )
}

export default Landing;
