
import { Sidebar } from "@/components/Sidebar";
import { JobPosting } from "@/components/JobPosting";
import { SuggestedConnection } from "@/components/SuggestedConnection";
import { ChatArea } from "@/components/ChatArea";

const jobPostings = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "Remote",
    posted: "2 days ago"
  },
  {
    title: "Product Manager",
    company: "Innovation Labs",
    location: "New York",
    posted: "1 week ago"
  }
];

const connections = [
  {
    name: "Alex Johnson",
    role: "Senior Developer",
    batch: "2020"
  },
  {
    name: "Sarah Smith",
    role: "Product Designer",
    batch: "2021"
  }
];

export default function Index() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Job Postings - Center */}
          <div className="col-span-6">
            <h2 className="text-2xl font-bold mb-6">Latest Job Postings</h2>
            <div className="space-y-4">
              {jobPostings.map((job, index) => (
                <JobPosting key={index} {...job} />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <h2 className="text-2xl font-bold mb-6">Suggested Connections</h2>
            {connections.map((connection, index) => (
              <SuggestedConnection key={index} {...connection} />
            ))}
          </div>

          {/* Chat Area */}
          <div className="col-span-3">
            <ChatArea />
          </div>
        </div>
      </main>
    </div>
  );
}
