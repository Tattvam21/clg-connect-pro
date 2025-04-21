import { Bot, MessageCircle, PlusCircle, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

// Sample message data
const initialMessages = [
  {
    id: "1",
    content: "Hi there! I'm your Alumni Connect AI assistant. How can I help you today?",
    sender: "AI Assistant",
    timestamp: "9:30 AM",
    isAI: true
  },
  {
    id: "2",
    content: "I'm looking for software engineering opportunities in Boston.",
    sender: "You",
    timestamp: "9:32 AM",
    isOwn: true
  },
  {
    id: "3",
    content: "I've found 5 software engineering jobs in Boston! Would you like me to connect you with alumni who work at these companies?",
    sender: "AI Assistant",
    timestamp: "9:33 AM",
    isAI: true
  }
];

// Sample quick reply suggestions
const quickReplies = [
  "Connect me with alumni",
  "Show me all jobs",
  "Resume review",
  "Networking tips"
];

export function ChatArea() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "You",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");
    
    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(newMessage),
        sender: "AI Assistant",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isAI: true
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // Generate simple AI responses based on user input
  const getAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes("job") || input.includes("work") || input.includes("career")) {
      return "I can help you find job opportunities! Would you like to search by location, industry, or company?";
    } else if (input.includes("connect") || input.includes("network") || input.includes("alumni")) {
      return "Networking is crucial for career growth! I can help you connect with alumni in your field. What industry are you interested in?";
    } else if (input.includes("resume") || input.includes("cv")) {
      return "I'd be happy to provide resume feedback! You can upload your resume and I'll connect you with our career services team.";
    } else if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! I'm your Alumni Connect assistant. I can help with job searches, alumni connections, and career advice. What would you like help with today?";
    } else {
      return "I'm here to help with your alumni networking and job search needs. Feel free to ask about job opportunities, connecting with alumni, or career advice!";
    }
  };

  return (
    <div className="flex flex-col h-[450px]">
      <CardHeader className="border-b py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-500" />
            <CardTitle className="text-base">AI Assistant</CardTitle>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <PlusCircle className="h-4 w-4 text-gray-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Start new conversation</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex items-start gap-2 ${message.isOwn ? "justify-end" : ""}`}
            >
              {!message.isOwn && (
                <Avatar className="h-8 w-8">
                  {message.isAI ? (
                    <div className="h-full w-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  ) : (
                    <>
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${message.sender}`} />
                      <AvatarFallback>{message.sender[0]}</AvatarFallback>
                    </>
                  )}
                </Avatar>
              )}
              
              <div 
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  message.isOwn
                    ? "bg-blue-600 text-white"
                    : message.isAI 
                      ? "bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600"
                      : "bg-gray-100 dark:bg-gray-800"
                }`}
              >
                <div className="flex justify-between items-center gap-2 mb-1">
                  <span className={`font-medium text-xs ${
                    message.isOwn 
                      ? "text-blue-100" 
                      : message.isAI 
                        ? "text-blue-600 dark:text-blue-300" 
                        : "text-gray-600 dark:text-gray-300"
                  }`}>
                    {message.isOwn ? "You" : message.sender}
                  </span>
                  <span className={`text-xs ${
                    message.isOwn 
                      ? "text-blue-100" 
                      : "text-gray-500 dark:text-gray-400"
                  }`}>
                    {message.timestamp}
                  </span>
                </div>
                <p className={`text-sm ${!message.isOwn && !message.isAI ? "text-gray-800 dark:text-gray-200" : ""}`}>
                  {message.content}
                </p>
              </div>
              
              {message.isOwn && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-start gap-2">
              <Avatar className="h-8 w-8">
                <div className="h-full w-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </Avatar>
              <div className="bg-blue-50 dark:bg-gray-700 border border-blue-200 dark:border-gray-600 max-w-[75%] rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-500 animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-500 animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-500 animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      {/* Quick replies */}
      <div className="px-4 py-2 flex gap-2 overflow-x-auto hide-scrollbar border-t border-gray-100 dark:border-gray-800">
        {quickReplies.map((reply, index) => (
          <Button 
            key={index} 
            variant="outline" 
            size="sm" 
            className="whitespace-nowrap text-xs py-1 px-3 h-auto border-blue-200 dark:border-gray-700 dark:text-gray-300"
            onClick={() => {
              setNewMessage(reply);
            }}
          >
            {reply}
          </Button>
        ))}
      </div>
      
      <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
        <Input 
          placeholder="Type a message..." 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
          className="flex-1 dark:bg-gray-800 dark:border-gray-700"
        />
        <Button 
          size="icon" 
          onClick={handleSendMessage} 
          disabled={newMessage.trim() === ""}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
