import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});
export const AuthContextProvider = (props) => {
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (storedUserLoggedInInformation === "LOGGED_IN") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem("IsLoggedIn", "LOGGED_IN");
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
