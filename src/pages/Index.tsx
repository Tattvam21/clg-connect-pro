
import { Sidebar } from "@/components/Sidebar";
import { JobPosting } from "@/components/JobPosting";
import { SuggestedConnection } from "@/components/SuggestedConnection";
import { ChatArea } from "@/components/ChatArea";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 pt-16 md:pt-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-600">Welcome back to Alumni Connect</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Job Postings - Center */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Latest Job Postings</h2>
                <a href="#" className="text-sm text-blue-600 hover:underline">View all</a>
              </div>
              <div className="space-y-4">
                {jobPostings.map((job, index) => (
                  <JobPosting key={index} {...job} />
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="md:col-span-3">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3">Suggested Connections</h2>
                {connections.map((connection, index) => (
                  <SuggestedConnection key={index} {...connection} />
                ))}
              </div>
              
              {/* Events Section */}
              <div>
                <h2 className="text-xl font-bold mb-3">Upcoming Events</h2>
                <div className="bg-white rounded-lg p-4 shadow-sm border">
                  <h3 className="font-semibold text-blue-600">Annual Alumni Meetup</h3>
                  <p className="text-sm text-gray-500">June 15, 2023 • Virtual</p>
                  <p className="text-sm mt-2">Connect with your batch mates and expand your professional network.</p>
                  <button className="mt-3 text-sm text-blue-600 hover:underline">RSVP Now</button>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="md:col-span-3">
              <ChatArea />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
