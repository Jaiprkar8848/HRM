import DashboardCard from '../DashboardCard';
import { Users } from 'lucide-react';

export default function DashboardCardExample() {
  return (
    <div className="p-6">
      <DashboardCard
        title="Total Employees"
        value="1,234"
        change="+12%"
        icon={Users}
        description="Active employees in the system"
      />
    </div>
  );
}