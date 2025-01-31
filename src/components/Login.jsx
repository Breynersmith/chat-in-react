import React, { useState, useContext } from "react";
import { getDatabase, ref, push, get } from "firebase/database";
import { database } from '../../firebase';
import { UserContext } from "../store/userContext.jsx"; 
import './Login.css';
import Header from './Header';

const Login = () => {
  const [tempUsername, setTempUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUsername } = useContext(UserContext);

  const handleLogin = async () => {
    setErrorMessage('');

    if (tempUsername.trim() === '') {
      setErrorMessage("Por favor ingresa un nombre de usuario");
      return;
    }

    const usersRef = ref(database, 'users');

    try {
      const snapshot = await get(usersRef);
      if (snapshot.exists()) {
        const users = Object.values(snapshot.val());

        const usernameExists = users.some(user => user.username === tempUsername);
        
        if (usernameExists) {
          setErrorMessage("El nombre de usuario ya está en uso. Elige otro.");
          return;
        }
      }

      await push(usersRef, { username: tempUsername });

      setUsername(tempUsername);
    } catch (error) {
      console.error("Error al verificar el usuario:", error);
      setErrorMessage("Hubo un error al verificar el usuario. Inténtalo de nuevo.");
    }
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
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
