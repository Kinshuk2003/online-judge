import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = (token, timeout = 100000) => {
    setToken(token);
    localStorage.setItem('token', token);
    setTimeout(() => {
      localStorage.removeItem('token');
    }, timeout);
    
  };

  const isAuthenticated = () => {
    const localToken = localStorage.getItem('token');
    if (localToken) {
      setToken(localToken);
    }else{
      setToken(null);
    }
    return token !== null;
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);