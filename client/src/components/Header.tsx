import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center gap-4">
        <SidebarTrigger data-testid="button-sidebar-toggle" />
        <h1 className="text-xl font-semibold text-foreground">HR Management System</h1>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" data-testid="button-notifications">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" data-testid="button-settings">
          <Settings className="w-5 h-5" />
        </Button>
        <Avatar data-testid="avatar-user">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>HR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}