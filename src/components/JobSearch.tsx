import { useState } from "react";
import { Filter, Search, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export type JobFilter = {
  query: string;
  location: string;
  jobType: string;
  remoteOnly: boolean;
  experienceLevel: string;
  industry: string;
};

interface JobSearchProps {
  onSearch: (filter: JobFilter) => void;
  className?: string;
}

export function JobSearch({ onSearch, className = "" }: JobSearchProps) {
  const [filter, setFilter] = useState<JobFilter>({
    query: "",
    location: "",
    jobType: "",
    remoteOnly: false,
    experienceLevel: "",
    industry: "",
  });

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSearch = () => {
    // Update active filters
    const newActiveFilters: string[] = [];
    
    if (filter.location) newActiveFilters.push(`Location: ${filter.location}`);
    if (filter.jobType) newActiveFilters.push(`Type: ${filter.jobType}`);
    if (filter.remoteOnly) newActiveFilters.push("Remote Only");
    if (filter.experienceLevel) newActiveFilters.push(`Experience: ${filter.experienceLevel}`);
    if (filter.industry) newActiveFilters.push(`Industry: ${filter.industry}`);
    
    setActiveFilters(newActiveFilters);
    
    // Call the search function with the current filters
    onSearch(filter);
  };

  const handleFilterChange = (key: keyof JobFilter, value: string | boolean) => {
    setFilter(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilter = (filterToClear: string) => {
    // Extract the filter type from the string
    const type = filterToClear.split(":")[0]?.trim().toLowerCase();
    
    setActiveFilters(activeFilters.filter(f => f !== filterToClear));
    
    if (type === "location") {
      setFilter(prev => ({ ...prev, location: "" }));
    } else if (type === "type") {
      setFilter(prev => ({ ...prev, jobType: "" }));
    } else if (filterToClear === "Remote Only") {
      setFilter(prev => ({ ...prev, remoteOnly: false }));
    } else if (type === "experience") {
      setFilter(prev => ({ ...prev, experienceLevel: "" }));
    } else if (type === "industry") {
      setFilter(prev => ({ ...prev, industry: "" }));
    }
  };

  const clearAllFilters = () => {
    setFilter({
      query: "",
      location: "",
      jobType: "",
      remoteOnly: false,
      experienceLevel: "",
      industry: "",
    });
    setActiveFilters([]);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="text"
            placeholder="Search jobs, keywords, companies..."
            className="pl-10 pr-4 py-2 dark:bg-gray-800 dark:border-gray-700"
            value={filter.query}
            onChange={(e) => handleFilterChange("query", e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            aria-label="Search jobs"
          />
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="shrink-0 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Open filters"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Filter Jobs</SheetTitle>
              <SheetDescription>Refine your job search with these filters.</SheetDescription>
            </SheetHeader>
            
            <div className="grid gap-6 py-6">
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="City, state, or country"
                  value={filter.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="jobType">Job Type</Label>
                <Select 
                  value={filter.jobType} 
                  onValueChange={(value) => handleFilterChange("jobType", value)}
                >
                  <SelectTrigger id="jobType" className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800">
                    <SelectItem value="full-time">Full Time</SelectItem>
                    <SelectItem value="part-time">Part Time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="experienceLevel">Experience Level</Label>
                <Select 
                  value={filter.experienceLevel} 
                  onValueChange={(value) => handleFilterChange("experienceLevel", value)}
                >
                  <SelectTrigger id="experienceLevel" className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800">
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid-Level</SelectItem>
                    <SelectItem value="senior">Senior Level</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="industry">Industry</Label>
                <Select 
                  value={filter.industry} 
                  onValueChange={(value) => handleFilterChange("industry", value)}
                >
                  <SelectTrigger id="industry" className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800">
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <Switch
                  id="remote"
                  checked={filter.remoteOnly}
                  onCheckedChange={(checked) => handleFilterChange("remoteOnly", checked)}
                />
                <Label htmlFor="remote">Remote Only</Label>
              </div>
            </div>
            
            <SheetFooter className="sm:justify-between gap-3">
              <Button 
                variant="outline" 
                onClick={clearAllFilters}
                className="flex-1 dark:border-gray-700 dark:text-gray-300"
              >
                Clear All
              </Button>
              <SheetClose asChild>
                <Button onClick={handleSearch} className="flex-1 bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        
        <Button onClick={handleSearch} className="shrink-0 bg-blue-600 hover:bg-blue-700">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      
      {/* Active filters */}
      {activeFilters.length > 0 && (
        <div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">Filters:</span>
            {activeFilters.map((filter) => (
              <Badge 
                key={filter} 
                variant="outline"
                className="flex items-center gap-1 py-0 h-6 px-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
              >
                {filter}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => clearFilter(filter)} 
                  className="h-4 w-4 p-0 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-full"
                  aria-label={`Remove ${filter} filter`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAllFilters} 
              className="text-xs text-gray-500 dark:text-gray-400 h-6 px-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Clear all filters"
            >
              Clear all
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 