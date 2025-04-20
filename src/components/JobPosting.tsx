
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface JobPostingProps {
  title: string;
  company: string;
  location: string;
  posted: string;
}

export function JobPosting({ title, company, location, posted }: JobPostingProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="bg-blue-100 p-2 rounded-full">
          <Briefcase className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
            {location}
          </span>
          <span>{posted}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs">View Details</Button>
          <Button size="sm" className="text-xs">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}
