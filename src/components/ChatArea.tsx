
import { MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

export function ChatArea() {
  return (
    <Card className="h-[400px] flex flex-col">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Chat
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-[300px] p-4">
          <div className="space-y-4">
            <p className="text-center text-sm text-gray-500">
              Connect with your alumni network
            </p>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
