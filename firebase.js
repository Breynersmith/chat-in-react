import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCu_g7byuEQQXu4ohPPLv7txZBKHHhB5Dc",
  authDomain: "pruebachat-react.firebaseapp.com",
  databaseURL: "https://pruebachat-react-default-rtdb.firebaseio.com",
  projectId: "pruebachat-react",
  storageBucket: "pruebachat-react.appspot.com",
  messagingSenderId: "561841592377",
  appId: "1:561841592377:web:69cf1a8b89e6358e9fd5e8"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
