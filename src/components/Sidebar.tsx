
import { Home, Users, MessageSquare, Briefcase, BookOpen, Gift, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Network", icon: Users, path: "/network" },
  { name: "Messages", icon: MessageSquare, path: "/messages" },
  { name: "Jobs", icon: Briefcase, path: "/jobs" },
  { name: "Resources", icon: BookOpen, path: "/resources" },
  { name: "Donations", icon: Gift, path: "/donations" },
];

export function Sidebar() {
  const isMobile = useIsMobile();

  const SidebarContent = () => (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-bold text-xl text-blue-600">Alumni Connect</h2>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navigation.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="w-full justify-start gap-3 mb-1"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Button>
        ))}
      </nav>
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <Users className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-sm">John Smith</p>
            <p className="text-xs text-gray-500">Batch of 2018</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed top-4 left-4 z-40">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="h-screen w-64 bg-white border-r">
      <SidebarContent />
    </div>
  );
}
