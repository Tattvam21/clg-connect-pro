import { BookmarkPlus, Briefcase, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface JobPostingProps {
  title: string;
  company: string;
  location: string;
  posted: string;
}

export function JobPosting({ title, company, location, posted }: JobPostingProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 dark:border-gray-700">
      <div className="h-2 bg-blue-500 dark:bg-blue-600"></div>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-md bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shrink-0">
            <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate dark:text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{company}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="text-xs font-normal border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0 h-5">
                {location}
              </Badge>
              <Badge variant="outline" className="text-xs font-normal border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0 h-5">
                Full Time
              </Badge>
              <Badge variant="outline" className="text-xs font-normal border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0 h-5">
                Remote
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 px-5 py-3 bg-gray-50 dark:bg-gray-800/50">
        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
          Posted {posted}
        </div>
        
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <BookmarkPlus className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save job</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button size="sm" className="text-xs rounded-full px-4 h-8 bg-blue-600 hover:bg-blue-700">
            Apply Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
