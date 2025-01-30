import React, { useContext } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import { UserProvider, UserContext } from "./store/userContext"; // Asegúrate de la ruta correcta
import "./App.css";

function App() {
  return (
    <UserProvider>
      <MainApp />
    </UserProvider>
  );
}

const MainApp = () => {
  const { username } = useContext(UserContext);

  return (
    <div className="container">
      {username === "" ? <Login /> : <Chat />}
    </div>
  );
};

export default App;
