import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const login = () => {
      setToken(true);
  };

  const logout = () => {
    setToken(false);
  };

  return (
    <AuthContext.Provider value={{login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);