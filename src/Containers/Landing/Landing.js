import React, {useState, useEffect, useContext} from 'react';
import './Landing.css';
import Header from '../../Components/Header/Header';
import AuthForm from '../../Components/AuthForm/AuthForm';
import { useAuth0 } from '@auth0/auth0-react';
import { HelperContext } from '../../Context/HelperContext';

const Landing = () => {
  const { user, isAuthenticated } = useAuth0();
  const { checkLoggedIn } = useContext(HelperContext);

  useEffect(() => {
    checkLoggedIn()
  },[user])

  return (
    <>
      <Header />
      <AuthForm />
    </>
  )
}

export default Landing;
