import React, { useState, createContext } from "react";
import Auth from "@aws-amplify/auth";

export const AuthContext = createContext(null);

const GlobalState = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        getUser: () => Auth.currentAuthenticatedUser(),
        signedIn,
        setSignedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default GlobalState;
