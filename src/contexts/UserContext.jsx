import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: '',
    auth: false,
    password: 'password123',
  });

  const login = (username) => {
    setLoggedInUser((loggedInUser) => ({
      username: username,
      auth: true,
      password: 'password123',
    }));
  };

  const logout = () => {
    setLoggedInUser((loggedInUser) => ({
      username: '',
      auth: false,
      password: 'password123',
    }));
  };

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
