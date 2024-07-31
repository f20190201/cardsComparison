import { useState } from 'react';
import axios from 'axios';

const ChatInput = ({ sendMessage,output, setIsChatBotOpen }) => {
  const [input, setInput] = useState('');

  const handleSend = async() => {
    if (input.trim() !== '') {
      sendMessage(input,"user");

      setInput('');
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/generate-content', {
         query: `${input} tell me this statement is related to finance or not reply in 'Yes' or 'No' only`,
          
        });
        console.log(response.data.response);
        
       if(response.data.response=="Yes"){
        console.log("enter");
        generateContent(input);
       }
       else{
        console.log(response.data.response);
        output(input,"user","This statement is not related to investment and finance","admin");
       }
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Network response was not ok');
      }
     
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
  return text.replace(/\*/g, '').trim();
}
  return (
    <div className="p-4 bg-white flex">
      <button
        className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={() => setIsChatBotOpen(false)}
      >
        Close
      </button>
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
