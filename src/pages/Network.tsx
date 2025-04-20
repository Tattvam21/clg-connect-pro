
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { SuggestedConnection } from "@/components/SuggestedConnection";

// Sample data - in a real app, this would come from an API
const alumni = [
  { id: 1, name: "Sarah Chen", role: "Software Engineer at Google", batch: "2020", location: "San Francisco" },
  { id: 2, name: "Mike Johnson", role: "Product Manager at Amazon", batch: "2019", location: "Seattle" },
  { id: 3, name: "Lisa Brown", role: "Data Scientist at Microsoft", batch: "2021", location: "New York" },
];

export default function Network() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlumni = alumni.filter(alum => 
    alum.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alum.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alum.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Network</h1>
      <div className="max-w-2xl mb-6">
        <SearchBar 
          placeholder="Search alumni by name, role, or location..." 
          onSearch={setSearchQuery}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAlumni.map(alum => (
          <SuggestedConnection
            key={alum.id}
            name={alum.name}
            role={alum.role}
            batch={alum.batch}
          />
        ))}
      </div>
    </div>
  );
}
