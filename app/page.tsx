'use client';

import { useState } from 'react';
import PortfolioPieChart from '@/components/PortfolioPieChart';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface PortfolioData {
  allocation: {
    stocks: number;
    bonds: number;
    alternatives: number;
  };
  expectedReturn: number;
  riskLevel: string;
  explanation: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          conversationHistory: messages,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = { role: 'assistant', content: data.reply };
      setMessages(prev => [...prev, assistantMessage]);

      if (data.portfolioData) {
        setPortfolioData(data.portfolioData);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            FoundationMark AI Portfolio Advisor
          </h1>
          <p className="text-gray-600">
            Simple answers to the questions that keep trustees up at night
          </p>
        </div>

        {/* Health Status Card - Shows when portfolio data is available */}
        {portfolioData && (
          <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 rounded-lg shadow-lg p-6 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">✅</span>
                  <h2 className="text-2xl font-bold text-green-800">
                    Your Foundation: Healthy
                  </h2>
                </div>
                <ul className="text-green-700 space-y-1">
                  <li>• On track to support grants sustainably</li>
                  <li>• Portfolio balanced for your risk tolerance</li>
                  <li>• No urgent action needed</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-sm text-green-600 font-medium">Expected Annual Return</p>
                <p className="text-4xl font-bold text-green-800">
                  {portfolioData.expectedReturn}%
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Main Chat Area */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-20">
                <p className="text-lg mb-4">👋 Hi! I'm here to help answer your foundation questions.</p>
                <div className="text-sm space-y-2">
                  <p className="font-medium text-gray-700">Try asking:</p>
                  <p>• "Are we okay? Can we afford to give more grants?"</p>
                  <p>• "What are other foundations like ours doing?"</p>
                  <p>• "If the market crashes, will we be alright?"</p>
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))
            )}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Portfolio Visualization */}
          {portfolioData && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How Your Money Would Be Divided
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                (This is called your <span className="font-medium">Asset Allocation</span> - fancy term for "the mix")
              </p>
              <PortfolioPieChart allocation={portfolioData.allocation} />
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">What You'll Likely Earn Each Year</p>
                  <p className="text-sm text-gray-500">(Expected Return)</p>
                  <p className="text-xl font-bold text-green-600">
                    {portfolioData.expectedReturn}%
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">How Bumpy the Ride</p>
                  <p className="text-sm text-gray-500">(Risk Level)</p>
                  <p className="text-xl font-bold text-blue-600 capitalize">
                    {portfolioData.riskLevel}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything... like 'Are we doing okay?' or 'Can we give more grants?'"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>Powered by Claude AI • FoundationMark Demo</p>
        </div>
      </div>
    </div>
  );
}
