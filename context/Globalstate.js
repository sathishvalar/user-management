import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Initial state as an array

  return (
    <GlobalContext.Provider value={{ users, setUsers }}>
      {children}
    </GlobalContext.Provider>
  );
};
