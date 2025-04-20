
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar"; // Ensure this import exists
import { SidebarProvider } from "@/components/ui/sidebar";

import Index from "./pages/Index";
import Network from "./pages/Network";
import Messages from "./pages/Messages";
import Jobs from "./pages/Jobs";
import Resources from "./pages/Resources";
import Donations from "./pages/Donations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-0 md:ml-64">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/network" element={<Network />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/donations" element={<Donations />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
