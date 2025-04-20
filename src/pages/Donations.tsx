
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const donations = [
  {
    id: 1,
    title: "Library Renovation Fund",
    description: "Help us modernize our university library",
    target: 50000,
    raised: 35000,
  },
  {
    id: 2,
    title: "Scholarship Program",
    description: "Support underprivileged students",
    target: 100000,
    raised: 75000,
  }
];

export default function Donations() {
  return (
    <div className="p-4 md:p-8 ml-0 md:ml-64">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Donations</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {donations.map(donation => (
          <Card key={donation.id}>
            <CardHeader>
              <CardTitle className="text-lg">{donation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{donation.description}</p>
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${(donation.raised / donation.target) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-600">Raised: ${donation.raised.toLocaleString()}</span>
                  <span className="text-gray-600">Goal: ${donation.target.toLocaleString()}</span>
                </div>
              </div>
              <Button className="w-full">Donate Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
