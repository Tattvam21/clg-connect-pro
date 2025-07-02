
import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";

// Simulated donation postings
const donationPostings = [
  {
    id: 1,
    title: "Scholarship Fund for Computer Science Students",
    description: "Help support emerging tech talent with scholarships.",
    amount: "$50,000 Goal",
    donor: "Tech Alumni Association"
  },
  {
    id: 2,
    title: "STEM Education Initiative",
    description: "Funding resources for underprivileged schools.",
    amount: "$75,000 Goal",
    donor: "Global Tech Network"
  },
  {
    id: 3,
    title: "Research Grant for AI Innovation",
    description: "Support cutting-edge artificial intelligence research.",
    amount: "$100,000 Goal",
    donor: "Alumni Innovation Fund"
  }
];

export default function Donations() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDonations = donationPostings.filter(donation => 
    donation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    donation.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Donation Opportunities</h1>
      <div className="max-w-2xl mb-6">
        <SearchBar 
          placeholder="Search donation opportunities..." 
          onSearch={setSearchQuery}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDonations.map(donation => (
          <div 
            key={donation.id} 
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold mb-2">{donation.title}</h2>
            <p className="text-gray-600 mb-2">{donation.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-blue-600">{donation.amount}</span>
              <span className="text-sm text-gray-500">{donation.donor}</span>
            </div>
            <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
              Donate Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
