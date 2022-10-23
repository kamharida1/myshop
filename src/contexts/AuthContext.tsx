import React, { createContext, useState } from 'react'

type Context = {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

type Props = {
  children: JSX.Element
}

export const AuthContext = createContext<Context>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
})

export function AuthProvider(props: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {props.children }
    </AuthContext.Provider>
  )
}