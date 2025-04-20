
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
      <CardContent className="pt-4 flex items-center gap-2 md:gap-3">
        <div className="bg-blue-100 p-2 rounded-full shrink-0">
          <User className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm md:text-base truncate">{name}</h4>
          <p className="text-xs md:text-sm text-gray-600 truncate">{role}</p>
          <p className="text-xs text-gray-500">Batch of {batch}</p>
        </div>
        <Button variant="outline" size="sm" className="text-xs shrink-0">
          Connect
        </Button>
      </CardContent>
    </Card>
  );
}
