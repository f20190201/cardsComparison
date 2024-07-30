const ChatMessage = ({ message }) => {
    return (
      <div className={`flex mb-4 ${message.user === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div className={` px-4 py-2 rounded-lg ${message.user === 'user' ? 'bg-purple-500 text-white' : 'bg-gray-300 text-black'}`} style={{"max-width": "50rem"}}>
          {message.text}
        </div>
      </div>
    );
  };
  
  export default ChatMessage;
  