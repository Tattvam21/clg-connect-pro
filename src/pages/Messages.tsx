
import { useState } from "react";
import { ChatArea } from "@/components/ChatArea";
import { ChatContact } from "@/components/ChatContact";

// Sample contacts data - in a real app this would come from an API
const contacts = [
  {
    id: 1,
    name: "Sarah Chen",
    lastMessage: "Thanks for the advice!",
    avatar: undefined
  },
  {
    id: 2,
    name: "Mike Johnson",
    lastMessage: "When is the next alumni meet?",
    avatar: undefined
  },
  {
    id: 3,
    name: "Lisa Brown",
    lastMessage: "Great talking to you!",
    avatar: undefined
  }
];

export default function Messages() {
  const [selectedContact, setSelectedContact] = useState<number>(1);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Messages</h1>
      <div className="flex gap-4 h-[600px]">
        <div className="w-80 border rounded-lg overflow-hidden flex flex-col">
          <div className="p-3 border-b bg-white">
            <h2 className="font-semibold">Chats</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <ChatContact
                key={contact.id}
                name={contact.name}
                lastMessage={contact.lastMessage}
                avatar={contact.avatar}
                isActive={selectedContact === contact.id}
                onClick={() => setSelectedContact(contact.id)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <ChatArea />
        </div>
      </div>
    </div>
  );
}
