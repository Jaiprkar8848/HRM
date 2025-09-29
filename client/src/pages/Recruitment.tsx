import JobPostingCard from "@/components/JobPostingCard";
import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search, Users, FileText, Clock, CheckCircle } from "lucide-react";

export default function Recruitment() {
  //todo: remove mock functionality
  const recruitmentStats = [
    { title: "Open Positions", value: "24", change: "+8%", icon: FileText },
    { title: "Total Applicants", value: "342", change: "+23%", icon: Users },
    { title: "In Progress", value: "18", change: "+5%", icon: Clock },
    { title: "Hired This Month", value: "7", change: "+40%", icon: CheckCircle },
  ];

  //todo: remove mock functionality
  const jobPostings = [
    {
      id: "job-001",
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "full-time" as const,
      salaryRange: "$120k - $180k",
      postedDate: "2 days ago",
      applicants: 23,
      status: "open" as const,
      description: "We are looking for an experienced frontend developer to join our growing engineering team. You'll be working on modern React applications with TypeScript.",
    },
    {
      id: "job-002", 
      title: "HR Business Partner",
      department: "Human Resources",
      location: "New York, NY",
      type: "full-time" as const,
      salaryRange: "$90k - $130k",
      postedDate: "5 days ago",
      applicants: 17,
      status: "open" as const,
      description: "Join our HR team as a Business Partner to drive employee engagement and organizational development initiatives.",
    },
    {
      id: "job-003",
      title: "Marketing Manager",
      department: "Marketing",
      location: "Austin, TX",
      type: "full-time" as const,
      salaryRange: "$85k - $120k",
      postedDate: "1 week ago",
      applicants: 41,
      status: "open" as const,
      description: "Lead marketing campaigns and drive brand awareness for our growing SaaS platform.",
    },
    {
      id: "job-004",
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      type: "remote" as const,
      salaryRange: "$100k - $140k",
      postedDate: "3 days ago",
      applicants: 29,
      status: "open" as const,
      description: "Create intuitive user experiences for our web and mobile applications.",
    },
    {
      id: "job-005",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Seattle, WA", 
      type: "contract" as const,
      salaryRange: "$130k - $170k",
      postedDate: "1 week ago",
      applicants: 12,
      status: "closed" as const,
      description: "Manage cloud infrastructure and deployment pipelines for our microservices architecture.",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Recruitment</h1>
          <p className="text-muted-foreground">Manage job postings and track applicants</p>
        </div>
        <Button data-testid="button-create-job-posting" onClick={() => console.log("Create new job posting")}>
          <Plus className="w-4 h-4 mr-2" />
          New Job Posting
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recruitmentStats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search job postings..."
            className="pl-10"
            data-testid="input-search-jobs"
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
            <SelectItem value="design">Design</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[150px]" data-testid="select-status">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Job Postings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {jobPostings.map((job) => (
          <JobPostingCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}