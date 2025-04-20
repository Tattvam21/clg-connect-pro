import { useState } from "react";
import { ChatArea } from "@/components/ChatArea";
import { ChatContact } from "@/components/ChatContact";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const [showChat, setShowChat] = useState(false);

  const handleContactClick = (contactId: number) => {
    setSelectedContact(contactId);
    if (isMobile) {
      setShowChat(true);
    }
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Messages</h1>
      <div className="flex flex-col md:flex-row gap-4 h-[calc(100vh-12rem)]">
        <div className={`${isMobile && showChat ? 'hidden' : 'block'} w-full md:w-80 border rounded-lg overflow-hidden flex flex-col`}>
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
                onClick={() => handleContactClick(contact.id)}
              />
            ))}
          </div>
        </div>
        <div className={`${isMobile && !showChat ? 'hidden' : 'block'} flex-1 relative`}>
          {isMobile && (
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-2 left-2 z-10 p-2 rounded-full bg-gray-100 md:hidden"
            >
              ←
            </button>
          )}
          <ChatArea />
        </div>
      </div>
    </div>
  );
}
