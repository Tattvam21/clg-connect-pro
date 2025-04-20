
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");

  const resources = [
    {
      id: 1,
      title: "Tech Interview Preparation Guide",
      category: "Career Development",
      description: "Comprehensive guide for tech interview success"
    },
    {
      id: 2,
      title: "Latest Machine Learning Trends",
      category: "Technology",
      description: "Insights into current ML and AI developments"
    },
    {
      id: 3,
      title: "Networking Strategies for Professionals",
      category: "Professional Growth",
      description: "Tips for effective professional networking"
    }
  ];

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Resources</h1>
      <div className="max-w-2xl mb-6">
        <SearchBar 
          placeholder="Search resources by title or category..." 
          onSearch={setSearchQuery}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map(resource => (
          <div 
            key={resource.id} 
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold mb-2">{resource.title}</h2>
            <p className="text-gray-600 mb-2">{resource.description}</p>
            <span className="text-sm text-blue-600 font-medium">{resource.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
