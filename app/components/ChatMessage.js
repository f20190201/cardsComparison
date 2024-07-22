const ChatMessage = ({ message }) => {
    return (
      <div className={`flex mb-4 ${message.user === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div className={`max-w-xs px-4 py-2 rounded-lg ${message.user === 'user' ? 'bg-purple-500 text-white' : 'bg-gray-300 text-black'}`}>
          {message.text}
        </div>
      </div>
    );
  };
  
  export default ChatMessage;
  