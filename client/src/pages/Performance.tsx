import PerformanceChart from "@/components/PerformanceChart";
import EmployeeCard from "@/components/EmployeeCard";
import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, Clock, Search, Calendar } from "lucide-react";

//todo: remove mock functionality
import hrManagerImg from "@assets/stock_images/professional_female__ff0fe678.jpg";
import developerImg from "@assets/stock_images/professional_male_so_c843ba01.jpg";
import marketingImg from "@assets/stock_images/professional_female__0bc8cb8b.jpg";
import projectManagerImg from "@assets/stock_images/professional_male_pr_4353b2a9.jpg";

export default function Performance() {
  //todo: remove mock functionality
  const performanceStats = [
    { title: "Avg Performance", value: "87%", change: "+5%", icon: TrendingUp },
    { title: "Reviews Due", value: "12", change: "-8%", icon: Clock },
    { title: "Top Performers", value: "28", change: "+12%", icon: BarChart3 },
    { title: "Team Score", value: "92%", change: "+7%", icon: Users },
  ];

  //todo: remove mock functionality
  const teamPerformance = [
    { month: 'Jan', score: 85 },
    { month: 'Feb', score: 88 },
    { month: 'Mar', score: 82 },
    { month: 'Apr', score: 91 },
    { month: 'May', score: 89 },
    { month: 'Jun', score: 95 }
  ];

  //todo: remove mock functionality
  const employeePerformances = [
    {
      id: "emp-001",
      name: "Sarah Johnson",
      role: "HR Manager",
      department: "Human Resources",
      email: "sarah.johnson@company.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      avatar: hrManagerImg,
      status: "active" as const,
      score: 95,
      trend: "up" as const,
      lastReview: "2024-01-15",
    },
    {
      id: "emp-002",
      name: "Mike Chen", 
      role: "Software Developer",
      department: "Engineering",
      email: "mike.chen@company.com",
      phone: "+1 (555) 987-6543",
      location: "San Francisco, CA",
      avatar: developerImg,
      status: "active" as const,
      score: 92,
      trend: "up" as const,
      lastReview: "2024-01-12",
    },
    {
      id: "emp-003",
      name: "Emily Rodriguez",
      role: "Marketing Specialist", 
      department: "Marketing",
      email: "emily.rodriguez@company.com",
      phone: "+1 (555) 456-7890",
      location: "Austin, TX",
      avatar: marketingImg,
      status: "active" as const,
      score: 88,
      trend: "stable" as const,
      lastReview: "2024-01-08",
    },
    {
      id: "emp-004",
      name: "David Park",
      role: "Project Manager",
      department: "Operations",
      email: "david.park@company.com",
      phone: "+1 (555) 321-0987",
      location: "Chicago, IL",
      avatar: projectManagerImg,
      status: "active" as const,
      score: 94,
      trend: "up" as const,
      lastReview: "2024-01-20",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Performance Appraisal</h1>
          <p className="text-muted-foreground">Track and evaluate employee performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" data-testid="button-generate-report">
            Generate Report
          </Button>
          <Button data-testid="button-new-appraisal">
            <Calendar className="w-4 h-4 mr-2" />
            New Appraisal
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {performanceStats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Performance Chart */}
        <PerformanceChart
          data={teamPerformance}
          title="Team Performance Trends"
        />

        {/* Performance Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Excellent (90-100%)</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }} />
                  </div>
                  <span className="text-xs font-medium w-8">15</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Good (80-89%)</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }} />
                  </div>
                  <span className="text-xs font-medium w-8">20</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Average (70-79%)</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '40%' }} />
                  </div>
                  <span className="text-xs font-medium w-8">10</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Needs Improvement</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '12%' }} />
                  </div>
                  <span className="text-xs font-medium w-8">3</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search employees..."
            className="pl-10"
            data-testid="input-search-employees"
          />
        </div>
        <Select>
          <SelectTrigger className="w-[180px]" data-testid="select-department">
            <SelectValue placeholder="Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="hr">Human Resources</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Employee Performance Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {employeePerformances.map((employee) => (
          <Card key={employee.id} className="hover-elevate" data-testid={`performance-card-${employee.id}`}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <img 
                    src={employee.avatar} 
                    alt={employee.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{employee.name}</h3>
                      <p className="text-sm text-muted-foreground">{employee.role}</p>
                      <p className="text-xs text-muted-foreground">{employee.department}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{employee.score}%</div>
                      <Badge variant={employee.trend === 'up' ? 'default' : 'secondary'}>
                        {employee.trend === 'up' ? '↗ Improving' : '→ Stable'}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-4">
                    Last reviewed: {new Date(employee.lastReview).toLocaleDateString()}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      data-testid={`button-view-performance-${employee.id}`}
                      onClick={() => console.log(`View performance details for ${employee.name}`)}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      data-testid={`button-schedule-review-${employee.id}`}
                      onClick={() => console.log(`Schedule review for ${employee.name}`)}
                    >
                      Schedule Review
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}