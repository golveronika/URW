import { useState, useRef } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from './../../Authorization/useAuth';

const Login = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const inputRef = useRef(null)

    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleOnLogin = () => {
        if (password) {
            setLoading(true)
            auth.signin(password,() => {
                setLoading(false)
                navigate("/game", { replace: true })
            })
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 400);
            inputRef.current.focus();

        }
    }


    const handleOnTextChange = (e) => {
        setPassword(e.target.value)
    }


    return (

        <div className="login-page">
            <h1>To Do App...</h1>
            <div className="login-form">
                <label htmlFor="password">Введите кодовое слово:</label>
                <input 
                    ref={inputRef}
                    className={error && 'error'}
                    type="password" 
                    placeholder="здесь" 
                    autoFocus 
                    autocomplete="current-password"
                    value={password}
                    onChange={handleOnTextChange}
                    disabled={!!loading} 
                />
                {(loading) && (<span className="loading">Loading...</span>)}
                <button 
                    disabled={!!loading} 
                    className={!!loading && 'disabled'} 
                    onClick={handleOnLogin}
                >Войти</button>
            </div>
        </div>
  )
    
}

export default Login