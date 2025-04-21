import { useState } from "react";
import { ChatArea } from "@/components/ChatArea";
import { EmptyConnectionsState, EmptyEventsState, EmptyJobsState, FirstTimeUserState } from "@/components/EmptyStates";
import { JobPosting } from "@/components/JobPosting";
import { JobSearch, type JobFilter } from "@/components/JobSearch";
import { NotificationDropdown } from "@/components/NotificationDropdown";
import { SuggestedConnection } from "@/components/SuggestedConnection";
import { Button } from "@/components/ui/button";
import { ConnectionSkeleton, JobCardSkeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Bell, Calendar, ChevronDown, Filter, Info, Search, Sparkles, Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const jobPostings = [
  {
    title: "Software Engineer",
    company: "Tech Innovations Inc",
    location: "Remote",
    posted: "2 days ago"
  },
  {
    title: "Product Manager",
    company: "Future Labs",
    location: "New York",
    posted: "1 week ago"
  },
  {
    title: "UX Designer",
    company: "Creative Solutions",
    location: "San Francisco",
    posted: "3 days ago"
  },
  {
    title: "Data Scientist",
    company: "Data Insights Corp",
    location: "Boston",
    posted: "Just now"
  }
];

const connections = [
  {
    name: "Alex Johnson",
    role: "Senior Developer",
    batch: "2018"
  },
  {
    name: "Sarah Smith",
    role: "Product Designer",
    batch: "2019"
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    batch: "2020"
  }
];

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(jobPostings);
  const [showWelcome, setShowWelcome] = useState(true);
  
  // Function to handle job search
  const handleJobSearch = (filter: JobFilter) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Simple filter implementation
      const filtered = jobPostings.filter(job => {
        const matchesQuery = !filter.query || 
          job.title.toLowerCase().includes(filter.query.toLowerCase()) || 
          job.company.toLowerCase().includes(filter.query.toLowerCase());
          
        const matchesLocation = !filter.location || 
          job.location.toLowerCase().includes(filter.location.toLowerCase());
          
        return matchesQuery && matchesLocation;
      });
      
      setFilteredJobs(filtered);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 focus-ring">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              <span className="sr-only">Alumni Connect</span>
              Alumni Connect
            </h1>
            
            <div className="hidden md:flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300 button-hover-effect focus-ring" aria-label="Dashboard">
                Dashboard
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300 button-hover-effect focus-ring" aria-label="Network">
                Network
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300 button-hover-effect focus-ring" aria-label="Messages">
                Messages
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300 button-hover-effect focus-ring" aria-label="Jobs">
                Jobs
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <NotificationDropdown />
            <ThemeToggle />
            <div className="hidden md:flex items-center space-x-2 border-l pl-3 dark:border-gray-700">
              <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">JS</span>
              </div>
              <span className="text-sm font-medium dark:text-gray-300">John Smith</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area - 3/4 width on large screens */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Section */}
            {showWelcome ? (
              <FirstTimeUserState onAction={() => setShowWelcome(false)} />
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 card-hover-effect">
                <h2 className="text-2xl font-bold mb-2 dark:text-gray-100">Welcome back, John!</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">You have 3 new connection requests and 5 new job recommendations.</p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 button-hover-effect focus-ring" aria-label="View connections">
                    View Connections
                  </Button>
                  <Button variant="outline" className="dark:border-gray-600 dark:text-gray-300 button-hover-effect focus-ring" aria-label="Explore jobs">
                    Explore Jobs
                  </Button>
                </div>
              </div>
            )}
            
            {/* Jobs and Events Tabs */}
            <Tabs defaultValue="jobs" className="w-full">
              <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                <TabsList className="bg-gray-100 dark:bg-gray-800 focus-ring">
                  <TabsTrigger 
                    value="jobs" 
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 focus-ring"
                    aria-label="Show job postings"
                  >
                    Job Postings
                  </TabsTrigger>
                  <TabsTrigger 
                    value="events" 
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 focus-ring"
                    aria-label="Show upcoming events"
                  >
                    Upcoming Events
                  </TabsTrigger>
                </TabsList>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" className="text-xs flex items-center gap-1 dark:border-gray-700 dark:text-gray-300 focus-ring">
                        <Info className="h-3 w-3" />
                        <span className="sr-only md:not-sr-only">Help</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View tips for job searching</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <TabsContent value="jobs" className="mt-0 space-y-4">
                {/* Job Search Component */}
                <JobSearch onSearch={handleJobSearch} className="mb-6" />
                
                {/* Jobs Content */}
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <JobCardSkeleton />
                    <JobCardSkeleton />
                    <JobCardSkeleton />
                    <JobCardSkeleton />
                  </div>
                ) : filteredJobs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredJobs.map((job, index) => (
                      <div key={index} className="card-entrance" style={{ animationDelay: `${index * 100}ms` }}>
                        <JobPosting {...job} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <EmptyJobsState onAction={() => setFilteredJobs(jobPostings)} />
                )}
              </TabsContent>
              
              <TabsContent value="events" className="mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border dark:border-gray-700 shadow-sm space-y-4 card-hover-effect">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg dark:text-white">Annual Alumni Meetup</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">June 15, 2023 • Virtual</p>
                      <p className="text-sm mt-2 dark:text-gray-300">Connect with your batch mates and expand your professional network.</p>
                      <Button className="mt-3 bg-blue-600 hover:bg-blue-700 button-hover-effect focus-ring" aria-label="RSVP for Annual Alumni Meetup">
                        RSVP Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 pt-4 border-t dark:border-gray-700">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg dark:text-white">Industry Networking Workshop</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">July 8, 2023 • Boston Tech Center</p>
                      <p className="text-sm mt-2 dark:text-gray-300">Learn effective networking strategies from industry professionals.</p>
                      <Button className="mt-3 bg-blue-600 hover:bg-blue-700 button-hover-effect focus-ring" aria-label="RSVP for Industry Networking Workshop">
                        RSVP Now
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Sidebar - 1/4 width */}
          <div className="lg:col-span-1 space-y-6">
            {/* Connections Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden card-hover-effect">
              <div className="px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100" id="connections-heading">Suggested Connections</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs text-blue-600 dark:text-blue-400 h-7 px-2 focus-ring"
                  aria-label="View all connections"
                >
                  View All
                </Button>
              </div>
              <div className="p-4 space-y-3" aria-labelledby="connections-heading">
                {connections.map((connection, index) => (
                  <div key={index} className="card-entrance" style={{ animationDelay: `${index * 100}ms` }}>
                    <SuggestedConnection {...connection} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Chat Area */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden card-hover-effect">
              <ChatArea />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
