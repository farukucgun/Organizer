import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    inLoginPage: false,
    userID: '',
    onLogout: () => {},
    onLogin: (id) => {},
    changeInLoginPage: () => {}
  });

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [inLoginPage, setInLoginPage] = useState(false);
    const [userID, setUserID] = useState('');
  
    useEffect(() => {
      const storedUserLoggedIn = localStorage.getItem('isLoggedIn');
      const storedUserID = localStorage.getItem('userID');

      if (storedUserLoggedIn === '1') {
        setIsLoggedIn(true);
        setInLoginPage(false);
      }

      if (storedUserID !== '') {
        setUserID(storedUserID);
      }
    }, []);
  
    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userID')
      setIsLoggedIn(false);
      setUserID('');
    };
  
    const loginHandler = (id) => {
      localStorage.setItem('isLoggedIn', '1');
      localStorage.setItem('userID', id)
      setIsLoggedIn(true);
      setUserID(id);
    };

    const loginPageHandler = () => {
      setInLoginPage((prevState) => { 
        return !prevState
      });
    }
  
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userID: userID,
          inLoginPage: inLoginPage,
          onLogout: logoutHandler,
          onLogin: loginHandler,
          changeInLoginPage: loginPageHandler
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  };

export default AuthContext;

