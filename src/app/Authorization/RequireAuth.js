import {
    useLocation,
    Navigate,
    Outlet,
  } from 'react-router-dom';

  import useAuth from './useAuth';

function RequireAuth() {
    let auth = useAuth();
    let location = useLocation();
  
    if (!auth.user) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  
    return (
      <div>Game</div>
    );
  }

  export default RequireAuth;