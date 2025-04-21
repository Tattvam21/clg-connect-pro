import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface SuggestedConnectionProps {
  name: string;
  role: string;
  batch: string;
}

export function SuggestedConnection({ name, role, batch }: SuggestedConnectionProps) {
  return (
    <div className="flex items-center gap-3 py-3 group">
      <Avatar>
        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`} />
        <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
          {name.charAt(0)}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-sm truncate dark:text-gray-100">{name}</h4>
          <span className="text-xs text-gray-500 dark:text-gray-400">Batch {batch}</span>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{role}</p>
      </div>
      
      <Button 
        size="sm"
        variant="ghost" 
        className="h-8 w-8 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <User className="h-4 w-4" />
      </Button>
    </div>
  );
}
