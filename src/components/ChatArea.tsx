
import { MessageCircle, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Message } from "./Message";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// Sample message data
const initialMessages = [
  {
    id: "1",
    content: "Welcome to Alumni Connect! How can I help?",
    sender: "Career Advisor",
    timestamp: "9:30 AM"
  },
  {
    id: "2",
    content: "I'm looking for software engineering opportunities.",
    sender: "You",
    timestamp: "9:32 AM",
    isOwn: true
  },
  {
    id: "3",
    content: "Great! I'll connect you with alumni in that field.",
    sender: "Career Advisor",
    timestamp: "9:33 AM"
  }
];

export function ChatArea() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "You",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <Card className="h-[400px] flex flex-col">
      <CardHeader className="border-b py-3">
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Chat
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0 flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <Message
                key={message.id}
                content={message.content}
                sender={message.sender}
                timestamp={message.timestamp}
                isOwn={message.isOwn}
              />
            ))}
          </div>
        </ScrollArea>
        <div className="p-3 border-t flex gap-2">
          <Input 
            placeholder="Type a message..." 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            className="flex-1"
          />
          <Button size="icon" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
