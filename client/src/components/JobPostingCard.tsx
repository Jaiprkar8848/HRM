import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, DollarSign, Users } from "lucide-react";

interface JobPostingCardProps {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  salaryRange: string;
  postedDate: string;
  applicants: number;
  status: 'open' | 'closed' | 'draft';
  description: string;
}

export default function JobPostingCard({
  id,
  title,
  department,
  location,
  type,
  salaryRange,
  postedDate,
  applicants,
  status,
  description
}: JobPostingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-blue-100 text-blue-800';
      case 'part-time': return 'bg-purple-100 text-purple-800';
      case 'contract': return 'bg-orange-100 text-orange-800';
      case 'remote': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover-elevate" data-testid={`job-posting-${id}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg" data-testid={`text-job-title-${id}`}>
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{department}</p>
          </div>
          <div className="flex gap-2">
            <Badge className={getStatusColor(status)} data-testid={`badge-job-status-${id}`}>
              {status}
            </Badge>
            <Badge className={getTypeColor(type)} data-testid={`badge-job-type-${id}`}>
              {type.replace('-', ' ')}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-3 h-3" />
            <span>{salaryRange}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            <span>Posted {postedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-3 h-3" />
            <span>{applicants} applicants</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm"
            data-testid={`button-view-job-${id}`}
            onClick={() => console.log(`View job details for ${title}`)}
          >
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            data-testid={`button-edit-job-${id}`}
            onClick={() => console.log(`Edit job posting: ${title}`)}
          >
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}