import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

import useAuth from './../../Authorization/useAuth';

function Loading() {

    let auth = useAuth();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      auth.signin("TEST",() => setIsLoaded(true));
    //   auth.signin(null,() => setIsLoaded(true));
    }, [])


    if (!isLoaded) {
      return <div>Loading...</div>
    }

    if (isLoaded) {
      return (
        <div>
          <Navigate to="/game" />
        </div>
      );
    }

  }

  export default Loading;