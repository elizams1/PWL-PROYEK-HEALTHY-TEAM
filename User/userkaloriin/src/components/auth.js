<<<<<<< HEAD
import {useState, useContext, createContext} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState('');

  const login = user =>{
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
=======
import {useState, useContext, createContext} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState('');

  const login = user =>{
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
>>>>>>> a14033f5d99fb3bbefa57fc135b1e1d182b5ca35
}