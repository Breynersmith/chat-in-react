import { useContext, useState, useEffect } from 'react';
import { ChatContext } from '../store/chatContext';
import { UserContext } from '../store/userContext';
import './Messages.css';

const Messages = () => {
  const { messages } = useContext(ChatContext);
  const { username } = useContext(UserContext);
  const [blur, setBlur] = useState(false)
  
  
  
  
  useEffect(() => {
     
    setBlur(username === '')

  }, [username]) 

  return (
    <div id="messages" className={blur ? 'blur' : ''}>
      {messages.length === 0 ? (
        <p>No hay mensajes aún.</p>
      ) : (
        messages.map((msg, index) => (
          <p key={index} className={msg.username === username ? "my-message" : "other-message"}>
            <strong>{msg.username}: </strong>{msg.text}
          </p>
        ))
      )}
    </div>
  );
};

export default Messages;
