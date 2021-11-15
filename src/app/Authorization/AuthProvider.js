import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

import fakeAuthProvider from './fakeAuthProvider';

function AuthProvider({ children }) {

    let [user, setUser] = useState(null);
  
    let signin = (newUser, callback) => {
      return fakeAuthProvider.signin(() => {
        setUser(newUser);
        callback();
      });
    };
  
    let signout = (callback) => {
      return fakeAuthProvider.signout(() => {
        setUser(null);
        callback();
      });
    };
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

  export default AuthProvider;