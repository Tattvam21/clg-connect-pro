
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface JobPostingProps {
  title: string;
  company: string;
  location: string;
  posted: string;
}

export function JobPosting({ title, company, location, posted }: JobPostingProps) {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <Briefcase className="h-6 w-6 text-blue-600" />
        <div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{location}</span>
          <span>{posted}</span>
        </div>
      </CardContent>
    </Card>
  );
}
