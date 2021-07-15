import React, { createContext, useState } from 'react';

export const StylingContext = createContext();

export const StylingContextProvider = (props) => {
  const [toHide, setToHide] = useState('hidden')


  return (
    <StylingContext.Provider value={{toHide, setToHide}}>
      {props.children}
    </StylingContext.Provider>
  )
}
