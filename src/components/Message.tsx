
import { cn } from "@/lib/utils";

interface MessageProps {
  content: string;
  sender: string;
  timestamp: string;
  isOwn?: boolean;
}

export function Message({ content, sender, timestamp, isOwn = false }: MessageProps) {
  return (
    <div className={cn("flex mb-4", isOwn ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-4 py-2",
          isOwn
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        )}
      >
        <div className="flex justify-between items-center mb-1">
          <span className={cn("font-medium text-xs", isOwn ? "text-blue-100" : "text-gray-600")}>
            {isOwn ? "You" : sender}
          </span>
          <span className={cn("text-xs ml-2", isOwn ? "text-blue-100" : "text-gray-500")}>
            {timestamp}
          </span>
        </div>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}
