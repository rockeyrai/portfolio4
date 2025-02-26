'use client'
import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

export const AIChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    // Here you would integrate with OpenAI or another AI API
    // For now, we'll just simulate a response
    setTimeout(() => {
      setLoading(false);
      setMessage('');
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-96">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-indigo-600 p-4 flex items-center">
          <Bot className="w-6 h-6 text-white mr-2" />
          <h3 className="text-white font-semibold">AI Assistant</h3>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};