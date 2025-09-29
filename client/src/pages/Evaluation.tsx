import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ClipboardList, Users, Calendar, TrendingUp, Search, Star } from "lucide-react";

export default function Evaluation() {
  //todo: remove mock functionality
  const evaluationStats = [
    { title: "Pending Evaluations", value: "15", change: "-12%", icon: ClipboardList },
    { title: "Completed This Month", value: "32", change: "+18%", icon: Users },
    { title: "Due This Week", value: "8", change: "+25%", icon: Calendar },
    { title: "Average Rating", value: "4.2", change: "+8%", icon: TrendingUp },
  ];

  //todo: remove mock functionality
  const evaluationData = [
    {
      id: "eval-001",
      employeeName: "Sarah Johnson",
      role: "HR Manager",
      department: "Human Resources",
      evaluationType: "Annual Review",
      dueDate: "2024-02-15",
      status: "In Progress",
      overallRating: 4.5,
      completedSections: 6,
      totalSections: 8,
    },
    {
      id: "eval-002", 
      employeeName: "Mike Chen",
      role: "Software Developer",
      department: "Engineering",
      evaluationType: "Quarterly Review",
      dueDate: "2024-02-10",
      status: "Completed",
      overallRating: 4.8,
      completedSections: 5,
      totalSections: 5,
    },
    {
      id: "eval-003",
      employeeName: "Emily Rodriguez",
      role: "Marketing Specialist", 
      department: "Marketing",
      evaluationType: "Mid-Year Review",
      dueDate: "2024-02-20",
      status: "Not Started",
      overallRating: 0,
      completedSections: 0,
      totalSections: 7,
    },
    {
      id: "eval-004",
      employeeName: "David Park",
      role: "Project Manager",
      department: "Operations",
      evaluationType: "Annual Review",
      dueDate: "2024-02-12",
      status: "Completed",
      overallRating: 4.3,
      completedSections: 8,
      totalSections: 8,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Not Started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Employee Evaluation</h1>
          <p className="text-muted-foreground">Manage and track employee evaluations</p>
        </div>
        <Button data-testid="button-create-evaluation">
          <ClipboardList className="w-4 h-4 mr-2" />
          New Evaluation
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {evaluationStats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search evaluations..."
          className="pl-10"
          data-testid="input-search-evaluations"
        />
      </div>

      {/* Evaluation Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {evaluationData.map((evaluation) => (
          <Card key={evaluation.id} className="hover-elevate" data-testid={`evaluation-card-${evaluation.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg" data-testid={`text-employee-${evaluation.id}`}>
                    {evaluation.employeeName}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{evaluation.role}</p>
                  <p className="text-xs text-muted-foreground">{evaluation.department}</p>
                </div>
                <Badge className={getStatusColor(evaluation.status)} data-testid={`badge-status-${evaluation.id}`}>
                  {evaluation.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Evaluation Type</p>
                    <p className="font-medium">{evaluation.evaluationType}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Due Date</p>
                    <p className="font-medium">{new Date(evaluation.dueDate).toLocaleDateString()}</p>
                  </div>
                </div>

                {evaluation.status === 'Completed' && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Overall Rating</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(evaluation.overallRating)}</div>
                      <span className="text-sm font-medium">{evaluation.overallRating}/5</span>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">
                      {evaluation.completedSections}/{evaluation.totalSections} sections
                    </span>
                  </div>
                  <Progress 
                    value={(evaluation.completedSections / evaluation.totalSections) * 100} 
                    className="h-2"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm"
                    data-testid={`button-view-evaluation-${evaluation.id}`}
                    onClick={() => console.log(`View evaluation for ${evaluation.employeeName}`)}
                  >
                    {evaluation.status === 'Completed' ? 'View Results' : 'Continue Evaluation'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    data-testid={`button-edit-evaluation-${evaluation.id}`}
                    onClick={() => console.log(`Edit evaluation for ${evaluation.employeeName}`)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}