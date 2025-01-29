import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../store/userContext';
import './Login.css';

const Login = () => {
  const [tempUsername, setTempUsername] = useState('');
  const [showLogin, setShowLogin ] = useState(false)
  const { username, setUsername } = useContext(UserContext);

  const handleLogin = () => {
    if (tempUsername.trim() === '') {
      alert("Por favor ingresa un nombre de usuario");
      return;
    }
    setUsername(tempUsername);
    
  };
  
  useEffect(() => {
     
         setShowLogin(username !== '')
         
  }, [username])

  return (
    <div >
      { !showLogin && <div className="login">
          <input
        type="text"
        value={tempUsername}
        onChange={(e) => setTempUsername(e.target.value)}
        placeholder="Ingrese un nombre de usuario"
      />
      <button onClick={handleLogin}>Entrar</button>
      </div>}
    </div>
  );
};

export default Login;
