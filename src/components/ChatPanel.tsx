
import { useState } from "react";
import { Bot, User, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export function ChatPanel() {
  const [messages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm here to help you draft legal documents. What type of document would you like to create today?",
      timestamp: '10:30 AM'
    },
    {
      id: '2',
      type: 'user',
      content: "I need to create a rental agreement for my property. It's a 2-bedroom apartment.",
      timestamp: '10:31 AM'
    },
    {
      id: '3',
      type: 'assistant',
      content: "Perfect! I'll help you create a comprehensive rental agreement. Let me start drafting the basic structure with standard clauses. What's the rental amount and lease duration?",
      timestamp: '10:31 AM'
    },
    {
      id: '4',
      type: 'user',
      content: "Monthly rent is $2,400 and I want a 12-month lease starting January 1st, 2024.",
      timestamp: '10:32 AM'
    },
    {
      id: '5',
      type: 'assistant',
      content: "Excellent! I'm now drafting your rental agreement with those details. You can see the document taking shape in the editor on the right. Feel free to ask me to modify any clauses or add specific terms.",
      timestamp: '10:33 AM'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Legal Assistant</h2>
        <p className="text-sm text-slate-500">Drafting your rental agreement...</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.type === 'user' 
                ? 'bg-blue-600' 
                : 'bg-slate-100'
            }`}>
              {message.type === 'user' ? (
                <User className="w-4 h-4 text-white" />
              ) : (
                <Bot className="w-4 h-4 text-slate-600" />
              )}
            </div>
            
            <div className={`max-w-[80%] ${message.type === 'user' ? 'text-right' : ''}`}>
              <div className={`rounded-2xl px-4 py-3 ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-50 text-slate-800'
              }`}>
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
              <p className="text-xs text-slate-400 mt-1 px-2">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-slate-100">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Ask me to modify the document or add specific clauses..."
              className="pr-12 rounded-full border-slate-200 focus:border-blue-300"
            />
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 rounded-full hover:bg-slate-100"
            >
              <Paperclip className="w-4 h-4 text-slate-500" />
            </Button>
          </div>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 px-6">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
