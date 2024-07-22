import { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, user: 'user' }]);
    // Here you can add logic to send the message to a backend or chatbot API
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-1" 
        style={{height: 'calc(100vh - 80px)'}}
    >
      <div className="flex-1 p-4 overflow-auto">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
