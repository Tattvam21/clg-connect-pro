
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ChatContactProps {
  name: string;
  lastMessage: string;
  avatar?: string;
  isActive: boolean;
  onClick: () => void;
}

export function ChatContact({ name, lastMessage, avatar, isActive, onClick }: ChatContactProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 transition-colors ${
        isActive ? "bg-gray-100" : ""
      }`}
    >
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm text-gray-900">{name}</p>
        <p className="text-sm text-gray-500 truncate">{lastMessage}</p>
      </div>
    </div>
  );
}
