import { useState, useEffect, useContext, createContext } from 'react';
import Auth from '../auth';

const REDIRECT = 'redirect';

const auth = new Auth();

const setRedirect = (redirect) =>
  window.sessionStorage.setItem(REDIRECT, redirect);

const getRedirect = () => window.sessionStorage.getItem(REDIRECT);

const clearRedirect = () => window.sessionStorage.removeItem(REDIRECT);

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const useProvider = () => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    auth.resolveUser().onAuthStateChanged((user, error) => {
      if (user) {
        setUser(user);
        setError(null);
      } else {
        setUser(null);
        if (error) {
          setError(error);
        }
      }

      setInitializing(false);
    });
  }, []);

  return {
    auth,
    user,
    initializing,
    error,
    setRedirect,
    getRedirect,
    clearRedirect,
  };
};

const AuthProvider = ({ children }) => {
  const auth = useProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
