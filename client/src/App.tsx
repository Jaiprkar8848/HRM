import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SimpleNavigation from "@/components/SimpleNavigation";
import Dashboard from "@/pages/Dashboard";
import Recruitment from "@/pages/Recruitment";
import Performance from "@/pages/Performance";
import Evaluation from "@/pages/Evaluation";
import Jobs from "@/pages/Jobs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/recruitment" component={Recruitment} />
      <Route path="/performance" component={Performance} />
      <Route path="/evaluation" component={Evaluation} />
      <Route path="/jobs" component={Jobs} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <SimpleNavigation />
          <main>
            <Router />
          </main>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
