import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Briefcase, Users, Clock, Search, Plus, Edit3 } from "lucide-react";

export default function Jobs() {
  //todo: remove mock functionality
  const jobDescriptionStats = [
    { title: "Total Positions", value: "47", change: "+12%", icon: FileText },
    { title: "Active Roles", value: "24", change: "+8%", icon: Briefcase },
    { title: "Departments", value: "8", change: "0%", icon: Users },
    { title: "Recent Updates", value: "6", change: "+50%", icon: Clock },
  ];

  //todo: remove mock functionality
  const jobDescriptions = [
    {
      id: "jd-001",
      title: "Senior Frontend Developer",
      department: "Engineering",
      level: "Senior",
      status: "Active",
      lastUpdated: "2024-01-15",
      responsibilities: [
        "Develop responsive web applications using React and TypeScript",
        "Collaborate with design and backend teams",
        "Mentor junior developers",
        "Participate in code reviews and technical discussions"
      ],
      requirements: [
        "5+ years of frontend development experience",
        "Expert knowledge of React, TypeScript, and modern CSS",
        "Experience with testing frameworks",
        "Strong communication skills"
      ],
      salary: "$120,000 - $180,000"
    },
    {
      id: "jd-002",
      title: "HR Business Partner",
      department: "Human Resources",
      level: "Mid-Level",
      status: "Active",
      lastUpdated: "2024-01-12",
      responsibilities: [
        "Partner with business leaders on HR strategy",
        "Lead employee relations initiatives",
        "Manage performance improvement processes",
        "Support organizational development"
      ],
      requirements: [
        "3+ years of HR business partnering experience",
        "Bachelor's degree in HR or related field",
        "Strong analytical and problem-solving skills",
        "SHRM or HRCI certification preferred"
      ],
      salary: "$90,000 - $130,000"
    },
    {
      id: "jd-003",
      title: "Marketing Manager",
      department: "Marketing",
      level: "Mid-Level", 
      status: "Draft",
      lastUpdated: "2024-01-10",
      responsibilities: [
        "Develop and execute marketing campaigns",
        "Analyze market trends and customer insights",
        "Manage marketing budget and ROI",
        "Coordinate with sales and product teams"
      ],
      requirements: [
        "4+ years of marketing experience",
        "Experience with digital marketing platforms",
        "Strong analytical skills with data-driven approach",
        "Excellent written and verbal communication"
      ],
      salary: "$85,000 - $120,000"
    },
    {
      id: "jd-004",
      title: "DevOps Engineer",
      department: "Engineering",
      level: "Senior",
      status: "Under Review",
      lastUpdated: "2024-01-08",
      responsibilities: [
        "Manage cloud infrastructure and deployments",
        "Implement CI/CD pipelines",
        "Monitor system performance and security",
        "Collaborate with development teams"
      ],
      requirements: [
        "5+ years of DevOps/Infrastructure experience",
        "Expertise in AWS, Docker, and Kubernetes",
        "Experience with monitoring and logging tools",
        "Strong scripting and automation skills"
      ],
      salary: "$130,000 - $170,000"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Under Review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Descriptions</h1>
          <p className="text-muted-foreground">Manage role specifications and requirements</p>
        </div>
        <Button data-testid="button-create-job-description">
          <Plus className="w-4 h-4 mr-2" />
          New Job Description
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobDescriptionStats.map((stat) => (
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
          placeholder="Search job descriptions..."
          className="pl-10"
          data-testid="input-search-jobs"
        />
      </div>

      {/* Job Description Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {jobDescriptions.map((job) => (
          <Card key={job.id} className="hover-elevate" data-testid={`job-description-${job.id}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg" data-testid={`text-job-title-${job.id}`}>
                    {job.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{job.department} • {job.level}</p>
                  <p className="text-xs text-muted-foreground">Updated {new Date(job.lastUpdated).toLocaleDateString()}</p>
                </div>
                <Badge className={getStatusColor(job.status)} data-testid={`badge-job-status-${job.id}`}>
                  {job.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Key Responsibilities</p>
                  <ul className="text-xs space-y-1">
                    {job.responsibilities.slice(0, 3).map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                    {job.responsibilities.length > 3 && (
                      <li className="text-muted-foreground italic">
                        +{job.responsibilities.length - 3} more...
                      </li>
                    )}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Requirements</p>
                  <ul className="text-xs space-y-1">
                    {job.requirements.slice(0, 2).map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                    {job.requirements.length > 2 && (
                      <li className="text-muted-foreground italic">
                        +{job.requirements.length - 2} more requirements...
                      </li>
                    )}
                  </ul>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground">Salary Range</p>
                  <p className="font-semibold text-primary">{job.salary}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm"
                    data-testid={`button-view-job-${job.id}`}
                    onClick={() => console.log(`View full job description: ${job.title}`)}
                  >
                    View Full Description
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    data-testid={`button-edit-job-${job.id}`}
                    onClick={() => console.log(`Edit job description: ${job.title}`)}
                  >
                    <Edit3 className="w-3 h-3 mr-1" />
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