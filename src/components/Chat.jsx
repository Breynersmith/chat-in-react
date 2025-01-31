import React, { useState, useEffect, useContext, useRef } from "react";
import { ref, onValue, push } from "firebase/database";
import { database } from "../../firebase";
import { UserContext } from "../store/userContext";
import Header from "./Header";
import "./Chat.css";

const Chat = () => {
  const { username } = useContext(UserContext); 
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const messagesRef = ref(database, "messages");

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedMessages = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setMessages(loadedMessages);
      }
    });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMessageObj = {
      username, 
      text: newMessage,
      timestamp: Date.now(),
    };

    push(ref(database, "messages"), newMessageObj);
    setNewMessage("");
  };

  return (
    <div className="chat">
      <Header />
      <p style={{ padding: "10px", textAlign: "end", color: "#d2d2d2" }}>
        Username: <span>{username}</span>
      </p>
      <div className="messages">
        {messages.length === 0 ? (
          <p>No hay mensajes aún.</p>
        ) : (
          messages.map((msg) => (
            <p key={msg.id}>
              <span className={msg.username === username ? "my-message" : "other-message"}>
                {msg.text}
              </span>
              <strong>{msg.username}</strong>
            </p>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="writer">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
