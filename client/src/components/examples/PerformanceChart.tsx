import PerformanceChart from '../PerformanceChart';

export default function PerformanceChartExample() {
  const sampleData = [
    { month: 'Jan', score: 85 },
    { month: 'Feb', score: 92 },
    { month: 'Mar', score: 78 },
    { month: 'Apr', score: 95 },
    { month: 'May', score: 89 },
    { month: 'Jun', score: 93 }
  ];

  return (
    <div className="p-6 max-w-lg">
      <PerformanceChart
        data={sampleData}
        title="Performance Tracking"
        employeeName="John Smith"
      />
    </div>
  );
}