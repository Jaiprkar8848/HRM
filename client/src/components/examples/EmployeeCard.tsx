import EmployeeCard from '../EmployeeCard';

export default function EmployeeCardExample() {
  return (
    <div className="p-6 max-w-md">
      <EmployeeCard
        id="emp-001"
        name="Sarah Johnson"
        role="Senior HR Manager"
        department="Human Resources"
        email="sarah.johnson@company.com"
        phone="+1 (555) 123-4567"
        location="New York, NY"
        avatar="https://github.com/shadcn.png"
        status="active"
      />
    </div>
  );
}