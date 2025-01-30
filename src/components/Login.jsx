import React, { useState, useContext } from "react";
import { getDatabase, ref, push } from "firebase/database";
import { database } from '../../firebase';
import { UserContext } from "../store/userContext.jsx"; 
import './Login.css';
import Header from './Header'

const Login = () => {
  const [tempUsername, setTempUsername] = useState('');
  const { setUsername } = useContext(UserContext);

  const handleLogin = () => {
    if (tempUsername.trim() === '') {
      alert("Por favor ingresa un nombre de usuario");
      return;
    }

    // Guardamos el username en Firebase
    push(ref(database, 'users'), { username: tempUsername });

    // Guardamos en el contexto global y localStorage
    setUsername(tempUsername);
  };

  return (
    <div className="login-container">
      <div className="login">
          <Header />
        <input
          type="text"
          value={tempUsername}
          onChange={(e) => setTempUsername(e.target.value)}
          placeholder="Ingrese un nombre de usuario"
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
