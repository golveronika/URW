/**
 * This represents some generic auth provider API, like Firebase.
 */
 const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 3000); // fake async
    },
    signout(callback) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    }
  };
  
  export default fakeAuthProvider;
  