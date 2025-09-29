import { useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", url: "/" },
  { title: "Recruitment", url: "/recruitment" },
  { title: "Performance", url: "/performance" },
  { title: "Evaluation", url: "/evaluation" },
  { title: "Job Descriptions", url: "/jobs" },
];

export default function SimpleNavigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg md:text-xl font-semibold text-foreground">
              <span className="hidden sm:inline">HR Management System</span>
              <span className="sm:hidden">HRMS</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                className={`text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md ${
                  location === link.url 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:bg-muted'
                }`}
                data-testid={`nav-${link.title.toLowerCase().replace(' ', '-')}`}
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Desktop User Info */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome, Admin</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  className={`text-sm font-medium transition-colors px-4 py-3 rounded-md ${
                    location === link.url 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                  data-testid={`nav-mobile-${link.title.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <div className="px-4 py-2 text-sm text-muted-foreground border-t mt-2 pt-4">
                Welcome, Admin
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}