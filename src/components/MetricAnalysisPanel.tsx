
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CryptoData } from '@/data/cryptoData';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

interface MetricAnalysisPanelProps {
  selectedCrypto: CryptoData | null;
}

const MetricAnalysisPanel: React.FC<MetricAnalysisPanelProps> = ({ selectedCrypto }) => {
  // Use random data for overall dashboard if no crypto is selected
  const metricScore = selectedCrypto ? selectedCrypto.metricScore : Math.floor(Math.random() * 30) + 65;
  const metrics = selectedCrypto ? selectedCrypto.metrics : [
    { name: "Network Stability", value: Math.floor(Math.random() * 30) + 60 },
    { name: "Transaction Throughput", value: Math.floor(Math.random() * 20) + 70 },
    { name: "Consensus Mechanism", value: Math.floor(Math.random() * 25) + 65 }
  ];

  // Calculate risk levels based on metric values (100 - metric value)
  const risks = metrics.map(metric => ({
    name: metric.name,
    value: 100 - metric.value,
    risk: getRiskLevel(100 - metric.value)
  }));

  const chartData = metrics.map(metric => ({
    name: metric.name,
    value: metric.value,
    risk: 100 - metric.value,
    average: Math.floor(Math.random() * 20) + 50
  }));

  function getRiskLevel(value: number): string {
    if (value < 20) return 'Low';
    if (value < 40) return 'Moderate';
    return 'High';
  }

  return (
    <Card className="border-gray-800 bg-crypto-chart-bg">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center justify-between">
          <span>Performance Metrics & Risk Analysis</span>
          <span className="text-sm font-normal text-gray-400">
            Overall Score: <span className={`font-bold ${metricScore >= 80 ? 'text-crypto-green' : metricScore >= 60 ? 'text-yellow-500' : 'text-crypto-red'}`}>
              {metricScore}%
            </span>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{metric.name}</span>
                  <div className="flex items-center gap-3">
                    <span className={metric.value >= 80 ? 'text-crypto-green' : metric.value >= 60 ? 'text-yellow-500' : 'text-crypto-red'}>
                      {metric.value}%
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded" style={{
                      backgroundColor: risks[index].value < 20 ? 'rgba(34, 197, 94, 0.2)' : 
                                      risks[index].value < 40 ? 'rgba(234, 179, 8, 0.2)' : 
                                      'rgba(239, 68, 68, 0.2)',
                      color: risks[index].value < 20 ? 'rgb(34, 197, 94)' : 
                             risks[index].value < 40 ? 'rgb(234, 179, 8)' : 
                             'rgb(239, 68, 68)'
                    }}>
                      {risks[index].risk} Risk
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-grow">
                    <Progress 
                      value={metric.value} 
                      className="h-2 bg-gray-700" 
                      indicatorClassName={
                        metric.value >= 80 ? 'bg-crypto-green' : 
                        metric.value >= 60 ? 'bg-yellow-500' : 
                        'bg-crypto-red'
                      }
                    />
                  </div>
                  <div className="w-20">
                    <Progress 
                      value={risks[index].value} 
                      className="h-2 bg-gray-700" 
                      indicatorClassName={
                        risks[index].value < 20 ? 'bg-crypto-green' : 
                        risks[index].value < 40 ? 'bg-yellow-500' : 
                        'bg-crypto-red'
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#9CA3AF', fontSize: 10 }}
                  tickFormatter={(value) => value.split(' ')[0]}
                />
                <YAxis 
                  tick={{ fill: '#9CA3AF', fontSize: 10 }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#E5E7EB' }}
                  formatter={(value) => [`${value}%`, 'Score']}
                />
                <Legend wrapperStyle={{ fontSize: 10 }} />
                <Bar 
                  dataKey="value" 
                  name="Performance Score" 
                  fill="#818cf8" 
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="risk" 
                  name="Risk Level" 
                  fill="#ef4444" 
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="average" 
                  fill="#4B5563" 
                  name="Average Score" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-400 border-t border-gray-800 pt-4">
          <p>
            {selectedCrypto 
              ? `${selectedCrypto.name} demonstrates ${metricScore >= 80 ? 'strong' : metricScore >= 60 ? 'adequate' : 'concerning'} performance metrics with ${100-metricScore}% overall risk factor.`
              : 'Select a cryptocurrency to view detailed performance metrics and risk analysis.'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricAnalysisPanel;
