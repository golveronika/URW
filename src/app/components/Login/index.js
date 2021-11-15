import { Navigate } from "react-router-dom";

import useAuth from './../../Authorization/useAuth';

const Login = () => {

    let auth = useAuth();

    return (
        <div>
            Login Page
        </div>
    )
    
}

export default Login