import React, { useState, useRef, useEffect } from 'react';
import { LucideBotMessageSquare, MessageCircle, Send, X } from 'lucide-react';
import "../assets/css/ChatbotUi.css"
import { chatBotUrl } from '../utils/constants';

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

    const handleSendMessage = async () => {
        if (message.trim()) {
            const newMessage = {
                id: Date.now(),
                text: message,
                sender: 'user',
                timestamp: Date.now()
            };
            setMessages([...messages, newMessage]);
            try {
                // Replace 'YOUR_ENDPOINT_URL' with the actual API endpoint
                const response = await fetch(chatBotUrl, {
                    method: 'POST',
                    headers: {
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ text: message })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const responseData = await response.json();
                const botResponse = {
                    id: Date.now() + 1,
                    text: responseData.text, // Assumes the API returns an object with a 'text' property
                    sender: 'bot',
                    timestamp: Date.now()
                };

                setMessages(prev => [...prev, botResponse]);
                setMessage('');
            } catch (error) {
                console.error('Error sending message:', error);

                // Optional: Add error message to chat
                const errorMessage = {
                    id: Date.now() + 2,
                    text: 'Sorry, there was an error processing your message.',
                    sender: 'bot',
                    timestamp: Date.now()
                };

                setMessages(prev => [...prev, errorMessage]);
            }
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 w-full flex flex-col justify-end items-end">
            {/* Discord-style Chatbot Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="button w-16 h-16 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]"
                >
                    <p className="button__text text-[.5rem] md:text-sm">
                        {/* {['D','I','S','C','O','R','D',' ','D','I','S','C','O','R','D'].map((char, index) => ( */}
                        {['C', 'H', 'A', 'T', ' ', 'B', 'O', 'T'].map((char, index) => (
                            <span key={index} style={{ "--index": index }}>{char}</span>
                        ))}
                    </p>
                    <div className="button__circle">
                        <LucideBotMessageSquare
                            className="button__icon text-sm"
                        />
                        <LucideBotMessageSquare
                            className="button__icon button__icon--copy text-sm"
                        />
                    </div>
                </button>
            )}

            {/* Chat Window (rest of the code remains the same) */}
            {isOpen && (
                <div className="w-3/4 md:w-2/3 lg:w-1/3 rounded-lg shadow-xl border border-dashed border-gray-200 flex flex-col h-full md:max-h-[80vh]">
                    {/* Header */}
                    <div className="bg-chatbotBg1 text-white p-3 rounded-t-lg flex justify-between items-center">
                        <h3 className="font-semibold text-borderColor text-sm md:text-base">
                            Chat with Us
                        </h3>
                        <button onClick={() => setIsOpen(false)} className="p-1">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-grow overflow-y-auto max-h-52 md:max-h-[60vh] p-2 space-y-2">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex flex-col ${msg.sender === 'user'
                                    ? 'items-end'
                                    : 'items-start'
                                    }`}
                            >
                                <div
                                    className={`rounded-lg px-3 py-2 text-sm md:text-base text-white ${msg.sender === 'user'
                                        ? 'bg-chatbotBg2'
                                        : 'bg-chatbotBg1'
                                        }`}
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
                    <div className="border-t flex items-center p-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-grow p-2 border rounded-md focus:outline-none text-sm md:text-base"
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-black text-white p-2 hover:bg-gray-800 rounded-md ml-2"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}


            {/* Styles for the Discord button */}

        </div>
    );
};

export default ChatbotUI;