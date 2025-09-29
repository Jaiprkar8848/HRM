import JobPostingCard from '../JobPostingCard';

export default function JobPostingCardExample() {
  return (
    <div className="p-6 max-w-md">
      <JobPostingCard
        id="job-001"
        title="Senior Frontend Developer"
        department="Engineering"
        location="San Francisco, CA"
        type="full-time"
        salaryRange="$120k - $180k"
        postedDate="2 days ago"
        applicants={23}
        status="open"
        description="We are looking for an experienced frontend developer to join our growing engineering team. You'll be working on modern React applications with TypeScript."
      />
    </div>
  );
}