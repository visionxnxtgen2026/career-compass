import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Explore from "./pages/Explore.tsx";
import SelectState from "./pages/SelectState.tsx";
import Streams from "./pages/Streams.tsx";
import ITRoles from "./pages/ITRoles.tsx";
import RoleDetail from "./pages/RoleDetail.tsx";
import Roadmap from "./pages/Roadmap.tsx";
import JobLocation from "./pages/JobLocation.tsx";
import Jobs from "./pages/Jobs.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/location" element={<Explore />} />
          <Route path="/state" element={<SelectState />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/streams/it" element={<ITRoles />} />
          <Route path="/role/:id" element={<RoleDetail />} />
          <Route path="/role/:id/roadmap" element={<Roadmap />} />
          <Route path="/jobs/location" element={<JobLocation />} />
          <Route path="/jobs" element={<Jobs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
