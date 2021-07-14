import React, { createContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

export const HelperContext = createContext();

export const HelperContextProvider = (props) => {
  const { user } = useAuth0();
  const history = useHistory();

  const checkLoggedIn = () => {
    if (user === undefined || user === false) {
      return
    } else {
      history.push('/Dashboard')
    }
  }

  return (
    <HelperContext.Provider value={{checkLoggedIn}}>
      {props.children}
    </HelperContext.Provider>
  )
}
