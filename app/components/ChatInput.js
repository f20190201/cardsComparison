import { useState } from 'react';
import axios from 'axios';

const ChatInput = ({ sendMessage,output }) => {
  const [input, setInput] = useState('');

  const handleSend = async() => {
    if (input.trim() !== '') {
      sendMessage(input,"user");
      setInput('');
     console.log(generateContent(input));
    }
      
  };
  async function generateContent(query) {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/generate-content', {
        query,
      });
      console.log(response);
      
      output(input,"user",removeAsterisks(response.data.response),"admin");
      
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Network response was not ok');
    }

}
 function removeAsterisks(text) {
  return text.replace(/\*\*|\*|-/g, '').trim();
}
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
