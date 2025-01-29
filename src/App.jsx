import React from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Messages from './components/Messages'
import "./App.css";
import { useContext, useEffect, useState } from 'react'
import { UserProvider } from "./store/userContext";
import { ChatProvider } from './store/chatContext'
import { UserContext } from './store/userContext'

function App() {
    
    
    
    return (
        <UserProvider>
            <ChatProvider>
                <div className="container">
                <Header />
                <div><Login /></div>
                <Messages />
                <Chat />
            </div>
            </ChatProvider>
        </UserProvider>
    );
}

export default App;
