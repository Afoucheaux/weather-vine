import React, { useEffect, useContext } from 'react';
import './Landing.css';
import Header from '../../Components/Header/Header';
import AuthForm from '../../Components/AuthForm/AuthForm';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { StylingContext } from '../../Context/StylingContext';

const Landing = () => {
  const { user } = useAuth0();
  const history = useHistory();
  const { setToHide } = useContext(StylingContext);

  useEffect(() => {
    checkLoggedIn(user)
  },[user])

  const checkLoggedIn = (user) => {
    if (user === undefined || user === false) {
      setToHide('hidden')
      return
    } else {
      setToHide('')
      history.push('/Dashboard')
    }
  }

  return (
    <>
      <Header />
      <AuthForm />
    </>
  )
}

export default Landing;
