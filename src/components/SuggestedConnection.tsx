
import { User } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface SuggestedConnectionProps {
  name: string;
  role: string;
  batch: string;
}

export function SuggestedConnection({ name, role, batch }: SuggestedConnectionProps) {
  return (
    <Card className="mb-3 hover:shadow-sm transition-all">
      <CardContent className="pt-4 flex items-center gap-3">
        <div className="bg-blue-100 p-2 rounded-full">
          <User className="h-5 w-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-xs text-gray-500">Batch of {batch}</p>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          Connect
        </Button>
      </CardContent>
    </Card>
  );
}
