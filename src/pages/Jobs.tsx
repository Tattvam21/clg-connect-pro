
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { JobPosting } from "@/components/JobPosting";

// Sample data - in a real app, this would come from an API
const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Google",
    location: "San Francisco, CA",
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Microsoft",
    location: "Seattle, WA",
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    location: "New York, NY",
    posted: "3 days ago"
  },
];

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8 ml-0 md:ml-64">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Jobs</h1>
      <div className="max-w-2xl mb-6">
        <SearchBar 
          placeholder="Search jobs by title, company, or location..." 
          onSearch={setSearchQuery}
        />
      </div>
      <div className="grid gap-4">
        {filteredJobs.map(job => (
          <JobPosting
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            posted={job.posted}
          />
        ))}
      </div>
    </div>
  );
}
