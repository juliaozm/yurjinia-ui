import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext(null);

export default function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}
