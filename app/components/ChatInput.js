import { useState } from 'react';

const ChatInput = ({ sendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="p-4 bg-white flex">
      <input
        type="text"
        className="flex-1 p-2 border border-purple-300 rounded-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-md"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
