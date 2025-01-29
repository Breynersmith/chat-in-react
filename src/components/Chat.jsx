import { useState, useEffect, useContext } from 'react';
import { ChatContext } from '../store/chatContext';
import { UserContext } from '../store/userContext';
import './Chat.css';

const Chat = () => {
  const [newMessage, setNewMessage] = useState('');
  const { messages, setMessages } = useContext(ChatContext);
  const { username } = useContext(UserContext);
  
   const [blur, setBlur] = useState(false)
  
  useEffect(() => {
     
         setBlur(username === '')
     
  }, [username]) 


  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    if (!username) {
      alert('Debes iniciar sesión para enviar mensajes.');
      return;
    }

    const message = { text: newMessage, username, timestamp: Date.now() };
    
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, message];
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      return updatedMessages;
    });

    setNewMessage('');
  };

  return (
    <div className={`${blur ? 'blur' : ''} chat`}>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Ingrese su mensaje"
      />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  );
};

export default Chat;
