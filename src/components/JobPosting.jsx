
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function JobPosting({ title, company, location, posted }) {
  return (
    <Card className="hover:shadow-md transition-shadow w-full">
      <CardHeader className="flex flex-row items-center gap-3 md:gap-4 pb-2">
        <div className="bg-blue-100 p-2 rounded-full shrink-0">
          <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
        </div>
        <div className="min-w-0 flex-1">
          <CardTitle className="text-base md:text-lg font-semibold truncate">{title}</CardTitle>
          <p className="text-sm text-gray-600 truncate">{company}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-between text-xs md:text-sm text-gray-500 mb-3 gap-2">
          <span className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
            {location}
          </span>
          <span>{posted}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" size="sm" className="text-xs w-full">View Details</Button>
          <Button size="sm" className="text-xs w-full">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}
