import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

import useAuth from './../../Authorization/useAuth';

function Loading() {

    const auth = useAuth();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      // auth.signin("TEST",() => setIsLoaded(true));
      auth.signin(null,() => setIsLoaded(true));
    }, [])
    
    if (!isLoaded) {
      return <div className="loading-page"><span>Loading...</span></div>
    }

    if (isLoaded) {
      return (<Navigate to="/game" />);
    }

  }

  export default Loading;