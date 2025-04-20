
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { JobPosting } from "@/components/JobPosting";

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample job postings
  const jobPostings = [
    { 
      id: 1, 
      title: "Software Engineer", 
      company: "Tech Innovations Inc.", 
      location: "San Francisco, CA",
      field: "Software Development"
    },
    { 
      id: 2, 
      title: "Product Manager", 
      company: "Global Solutions", 
      location: "New York, NY", 
      field: "Product Management"
    },
    { 
      id: 3, 
      title: "Data Scientist", 
      company: "Data Dynamics", 
      location: "Seattle, WA", 
      field: "Data Science"
    }
  ];

  const filteredJobs = jobPostings.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.field.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Job Postings</h1>
      <div className="max-w-2xl mb-6">
        <SearchBar 
          placeholder="Search jobs by title, company, or field..." 
          onSearch={setSearchQuery}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJobs.map(job => (
          <JobPosting
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
}
