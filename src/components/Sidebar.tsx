
import { Home, Users, MessageSquare, Briefcase, Menu } from "lucide-react";
import { Button } from "./ui/button";

const navigation = [
  { name: "Dashboard", icon: Home },
  { name: "Network", icon: Users },
  { name: "Messages", icon: MessageSquare },
  { name: "Jobs", icon: Briefcase },
];

export function Sidebar() {
  return (
    <div className="h-screen w-64 bg-white border-r p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-xl">Alumni Hub</h2>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      <nav className="space-y-2">
        {navigation.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="w-full justify-start gap-3"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Button>
        ))}
      </nav>
    </div>
  );
}
