import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PerformanceData {
  month: string;
  score: number;
}

interface PerformanceChartProps {
  data: PerformanceData[];
  title: string;
  employeeName?: string;
}

export default function PerformanceChart({ data, title, employeeName }: PerformanceChartProps) {
  const maxScore = Math.max(...data.map(d => d.score));
  
  return (
    <Card data-testid="performance-chart">
      <CardHeader>
        <CardTitle className="text-lg">
          {title}
          {employeeName && <span className="text-sm font-normal text-muted-foreground ml-2">- {employeeName}</span>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-16 text-sm text-muted-foreground">
                {item.month}
              </div>
              <div className="flex-1 bg-muted rounded-full h-2 relative">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(item.score / maxScore) * 100}%` }}
                />
              </div>
              <div className="w-12 text-sm font-medium" data-testid={`score-${item.month}`}>
                {item.score}%
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <div className="text-sm text-muted-foreground">Average Performance</div>
          <div className="text-2xl font-bold text-primary">
            {Math.round(data.reduce((sum, d) => sum + d.score, 0) / data.length)}%
          </div>
        </div>
      </CardContent>
    </Card>
  );
}