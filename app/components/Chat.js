import { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Audio } from 'react-loader-spinner';
const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const open = props.open, setIsChatBotOpen = props.setIsChatBotOpen;
  const [loading, setLoading] = useState(false);
const[prevmessage,setprev]=useState("")
  const sendMessage = (message, role) => {
    setMessages([...messages, { text: message, user: role }]);
    setprev(message);
    setLoading(true);
    // Here you can add logic to send the message to a backend or chatbot API
  };
  const output = (message, role,message2,role2) => {

    console.log(prevmessage)
    setMessages([...messages, { text: message, user: "user" },{text:message2,user:"admin"}]);
    setLoading(false);
    // Here you can add logic to send the message to a backend or chatbot API
  };
  return (
    // <div className={`flex flex-col h-screen bg-gray-100 p-1 transition-all ${open ? 'opacity-100 slide-in-right' : 'opacity-0 slide-out-right'} duration-1000`} 
    <div className={`flex flex-col bg-gray-100 p-1 transition-all ease-out fixed inset-0 ${!open && ' translate-x-full '} duration-500`} 
        style={{marginTop: '87px', height: 'calc(100vh - 87px)' }}
    >
      <div className={`flex-1 p-4 overflow-auto`}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
        {loading &&  <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/> }
      </div>
      <ChatInput sendMessage={sendMessage} output={output} setIsChatBotOpen={setIsChatBotOpen}/>
    </div>
  );
};

export default Chat;
