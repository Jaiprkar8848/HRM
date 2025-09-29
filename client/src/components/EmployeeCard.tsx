import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

interface EmployeeCardProps {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
  status: 'active' | 'inactive' | 'on-leave';
}

export default function EmployeeCard({ 
  id, 
  name, 
  role, 
  department, 
  email, 
  phone, 
  location, 
  avatar, 
  status 
}: EmployeeCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'on-leave': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover-elevate" data-testid={`employee-card-${id}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={avatar} />
            <AvatarFallback className="text-lg font-semibold">
              {name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg text-foreground" data-testid={`text-employee-name-${id}`}>
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground">{role}</p>
                <p className="text-xs text-muted-foreground">{department}</p>
              </div>
              <Badge className={getStatusColor(status)} data-testid={`badge-status-${id}`}>
                {status.replace('-', ' ')}
              </Badge>
            </div>
            
            <div className="space-y-1 text-xs text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                data-testid={`button-view-profile-${id}`}
                onClick={() => console.log(`View profile for ${name}`)}
              >
                View Profile
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                data-testid={`button-contact-${id}`}
                onClick={() => console.log(`Contact ${name}`)}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}