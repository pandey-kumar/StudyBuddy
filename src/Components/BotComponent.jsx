import React, { useState } from "react";
import axios from "axios";

const BotComponent = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = input;
    setMessages([...messages, { role: "user", content: userMessage }]);

    try {
      const response = await axios.post("/api/ai-bot", { prompt: userMessage });
      const botMessage = response.data.output;
      setMessages([
        ...messages,
        { role: "user", content: userMessage },
        { role: "assistant", content: botMessage },
      ]);
    } catch (error) {
      console.error("Error fetching AI response");
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default BotComponent;
