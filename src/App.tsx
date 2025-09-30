import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import RouteSync from "@/components/RouteSync";
import Roadmap from "./pages/Roadmap";
import AuthGate from "./components/AuthGate"; // ✅ add this
import RequireName from "./components/RequireName";
import QuizMaster from "./pages/QuizMaster";
import MLIntroductionPage from "./pages/MLIntroductionPage";
import NotFound from "./pages/NotFound";
import Hub from "./pages/Hub";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";
import Achievements from "./pages/Achievements";
import Progress from "./pages/Progress";
import Practice from "./pages/Practice";
import Simulation from "./pages/Simulation";
import Next from "./pages/Next";

const queryClient = new QueryClient();
 const AppLayout = () => (
  <SidebarProvider>
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset className="flex-1">
        <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex-1" />
          <Link to="/" className="text-sm px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
            Home
          </Link>
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
      </SidebarInset>
    </div>
  </SidebarProvider>
 );



const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthGate /> {/* Prompts ONLY if no name */}
        <RouteSync />
        <Routes>
          {/* ✅ Home allowed for everyone */}
          <Route path="/" element={<Hub />} />

          {/* ✅ Any page below requires username */}
          <Route element={<RequireName />}>
            <Route element={<AppLayout />}>
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/quizmaster" element={<QuizMaster />} />
              <Route path="/ml-introduction" element={<MLIntroductionPage />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/next" element={<Next />} />
            </Route>

            {/* Legacy hub route also protected */}
            <Route path="/hub" element={<Hub />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
