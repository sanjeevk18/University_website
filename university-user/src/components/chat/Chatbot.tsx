'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  time: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I am the SAHU AI Assistant 🤖. How can I help you with your university journey today?',
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      let botReply = "I can help you with admissions, courses, fees, placements, hostel facilities, or campus life. What would you like to know?";
      
      const lowerInput = inputText.toLowerCase();
      
      // Admissions
      if (lowerInput.includes('admission') || lowerInput.includes('apply') || lowerInput.includes('join')) {
        botReply = "Admissions for the 2024-25 session are currently open! You can apply online by clicking the 'Apply Now' button at the top of the page, or visit our Admissions portal for eligibility criteria.";
      } 
      // Courses
      else if (lowerInput.includes('course') || lowerInput.includes('program') || lowerInput.includes('degree') || lowerInput.includes('study')) {
        botReply = "We offer premium healthcare programs including B.Sc Nursing, B.Pharm, Medical Lab Technology (MLT), and Physiotherapy. Our courses are fully accredited and industry-aligned.";
      } 
      // Fees
      else if (lowerInput.includes('fee') || lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pay')) {
        botReply = "Our fee structure is transparent and varies by program. We also offer easy installment options. Please visit the 'Fee Structure' section under the Admissions tab for exact details.";
      } 
      // Placements
      else if (lowerInput.includes('placement') || lowerInput.includes('job') || lowerInput.includes('career') || lowerInput.includes('salary')) {
        botReply = "We have a 95% placement rate! Our alumni are placed in top hospitals and healthcare organizations globally. Our Career Services team provides 100% placement assistance.";
      } 
      // Hostel
      else if (lowerInput.includes('hostel') || lowerInput.includes('stay') || lowerInput.includes('accommodation') || lowerInput.includes('room')) {
        botReply = "Yes, we provide secure, separate hostel facilities for boys and girls with 24/7 security, Wi-Fi, nutritious mess food, and medical emergency support.";
      } 
      // Location / Contact
      else if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('address') || lowerInput.includes('contact')) {
        botReply = "Our beautiful 25-acre campus is located in Lucknow, Uttar Pradesh. You can reach our helpdesk at +91 522 123 4567 or email us at info@sahu.edu.in.";
      }
      // Scholarships
      else if (lowerInput.includes('scholarship') || lowerInput.includes('discount')) {
        botReply = "We offer merit-based scholarships up to 50% for outstanding students, as well as financial aid for underprivileged backgrounds. Check our Scholarship Form in the Student Corner.";
      }
      // Greetings
      else if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
        botReply = "Hello there! Welcome to State Allied Healthcare University. How can I assist you with your academic journey today?";
      }

      const newBotMessage: Message = {
        id: messages.length + 2,
        text: botReply,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-poppins">
      {/* Chat Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-110 ${isOpen ? 'bg-red-500 rotate-90' : 'bg-[#ff6a00] hover:bg-[#e65c00]'}`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-indigo-900"></div>
              </div>
              <div>
                <h3 className="font-bold text-sm">SAHU AI Assistant</h3>
                <p className="text-xs text-blue-200">Online | Replies instantly</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <span className="text-sm">🤖</span>
                  </div>
                )}
                <div className={`max-w-[75%] rounded-2xl px-4 py-2 shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-[#ff6a00] text-white rounded-tr-sm' 
                    : 'bg-white text-gray-800 rounded-tl-sm border border-gray-100'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <p className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-orange-200' : 'text-gray-400'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question..." 
                className="flex-1 h-12 bg-gray-50 rounded-xl px-4 text-sm outline-none focus:ring-2 focus:ring-[#ff6a00]/30 transition-all"
              />
              <button 
                type="submit"
                disabled={!inputText.trim()}
                className="w-12 h-12 bg-[#ff6a00] text-white rounded-xl flex items-center justify-center hover:bg-orange-600 disabled:opacity-50 disabled:hover:bg-[#ff6a00] transition-colors"
              >
                <svg className="w-5 h-5 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
