import React, { useState, useRef, useEffect } from 'react';
import { LucideBotMessageSquare, MessageCircle, Send, X } from 'lucide-react';

const ChatbotUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    
    const isToday = date.toDateString() === today.toDateString();
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    if (isToday) {
      return timeString;
    } else {
      const dayString = date.toLocaleDateString([], { 
        month: 'short', 
        day: 'numeric' 
      });
      return `${dayString} ${timeString}`;
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        text: message,
        sender: 'user',
        timestamp: Date.now()
      };
      setMessages([...messages, newMessage]);
      
      // Simulated bot response (replace with actual AI logic)
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: `Received: ${message}`,
          sender: 'bot',
          timestamp: Date.now()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 500);

      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Discord-style Chatbot Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className="button w-16 h-16 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]"
        >
          <p className="button__text">
            {/* {['D','I','S','C','O','R','D',' ','D','I','S','C','O','R','D'].map((char, index) => ( */}
            {['C','H','A','T',' ','B','O','T'].map((char, index) => (
              <span key={index} style={{"--index": index}}>{char}</span>
            ))}
          </p>
          <div className="button__circle">
           <LucideBotMessageSquare 
              className="button__icon"
           size={30} />
           <LucideBotMessageSquare 
              className="button__icon button__icon--copy"
           size={30} />
          </div>
        </button>
      )}

      {/* Chat Window (rest of the code remains the same) */}
      {isOpen && (
        <div className="w-80 rounded-lg shadow-xl border border-dashed border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-chatbotBg1 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold text-borderColor">Chat with Us</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-grow overflow-y-auto max-h-64">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`flex flex-col px-2 ${
                  msg.sender === 'user' 
                    ? 'items-end bg-chatbotBg2' 
                    : 'items-start bg-chatbotBg1'
                }`}
              >
                <div 
                  className={`rounded-lg max-w-[80%] text-white `}
                >
                  {msg.text}
                </div>
                <span className="text-xs text-gray-500">
                  {formatTimestamp(msg.timestamp)}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t flex items-center h-full">
            <input 
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 border focus:outline-none"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              onClick={handleSendMessage}
              className="bg-black text-white p-2 hover:bg-gray-800 h-full"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Styles for the Discord button */}
      <style jsx>{`
        .button {
          cursor: pointer;
          border: none;
          background: #000;
          color: #fff;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          display: grid;
          place-content: center;
          transition: background 300ms, transform 200ms;
          font-weight: 600;
        }
        .button__text {
          position: absolute;
          inset: 0;
          animation: text-rotation 8s linear infinite;
        }
        .button__text > span {
          position: absolute;
          transform: rotate(calc(40deg * var(--index)));
          inset: 5px;
        }
        .button__circle {
          position: relative;
          width: 40px;
          height: 40px;
          overflow: hidden;
          background: #212121;
          color: #32de84;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .button__icon--copy {
          position: absolute;
          transform: translate(-150%, 150%);
        }
        .button:hover {
          background: #000;
          transform: scale(1.05);
        }
        .button:hover .button__icon {
          color: #fff;
        }
        .button:hover .button__icon:first-child {
          transition: transform 0.3s ease-in-out;
          transform: translate(150%, -150%);
        }
        .button:hover .button__icon--copy {
          transition: transform 0.3s ease-in-out 0.1s;
          transform: translate(0);
        }
        @keyframes text-rotation {
          to {
            rotate: 360deg;
          }
        }
        .button:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default ChatbotUI;