
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import { featureImportanceData, FeatureImportance } from '@/data/featureData';

const FeatureAnalysisChart: React.FC = () => {
  const [category, setCategory] = useState<'all' | 'market' | 'network' | 'security' | 'regulatory'>('all');
  
  const filteredData = category === 'all' 
    ? featureImportanceData
    : featureImportanceData.filter((feature) => feature.category === category);

  const sortedData = [...filteredData].sort((a, b) => b.enhanced - a.enhanced);
  const topFeatures = sortedData.slice(0, 10);

  const radarData = category === 'all'
    ? [
        { category: 'Market', original: 0.59, enhanced: 0.74 },
        { category: 'Network', original: 0.58, enhanced: 0.70 },
        { category: 'Security', original: 0.71, enhanced: 0.81 },
        { category: 'Regulatory', original: 0.30, enhanced: 0.46 }
      ]
    : sortedData.map(item => ({
        category: item.name,
        original: item.original,
        enhanced: item.enhanced
      }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload as FeatureImportance;
      return (
        <div className="bg-crypto-gray p-2 border border-gray-700 rounded shadow-lg">
          <p className="text-sm font-medium">{data.name}</p>
          <p className="text-xs text-gray-400">Original: {(data.original * 100).toFixed(1)}%</p>
          <p className="text-xs text-purple-400">Enhanced: {(data.enhanced * 100).toFixed(1)}%</p>
          <p className="text-xs text-gray-400 mt-1">Improvement: {((data.enhanced - data.original) * 100).toFixed(1)}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-gray-800 bg-crypto-chart-bg">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">RFSA Feature Importance Analysis</CardTitle>
        <div className="flex space-x-2 mt-2">
          <button 
            className={`text-xs px-3 py-1 rounded-full ${category === 'all' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setCategory('all')}
          >
            All
          </button>
          <button 
            className={`text-xs px-3 py-1 rounded-full ${category === 'market' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setCategory('market')}
          >
            Market
          </button>
          <button 
            className={`text-xs px-3 py-1 rounded-full ${category === 'network' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setCategory('network')}
          >
            Network
          </button>
          <button 
            className={`text-xs px-3 py-1 rounded-full ${category === 'security' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setCategory('security')}
          >
            Security
          </button>
          <button 
            className={`text-xs px-3 py-1 rounded-full ${category === 'regulatory' ? 'bg-crypto-purple text-white' : 'bg-gray-800 text-gray-400'}`}
            onClick={() => setCategory('regulatory')}
          >
            Regulatory
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="bar">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            <TabsTrigger value="radar">Radar Chart</TabsTrigger>
          </TabsList>
          <TabsContent value="bar" className="pt-4">
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={topFeatures}
                  margin={{ top: 5, right: 30, left: 0, bottom: 80 }}
                >
                  <XAxis 
                    dataKey="name" 
                    angle={-45} 
                    textAnchor="end" 
                    height={80} 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  />
                  <YAxis 
                    tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    wrapperStyle={{ paddingTop: 10, fontSize: 12 }} 
                    align="center"
                  />
                  <Bar 
                    dataKey="original" 
                    name="Original RFSA" 
                    fill="#3E92CC" 
                    radius={[4, 4, 0, 0]} 
                  />
                  <Bar 
                    dataKey="enhanced" 
                    name="Enhanced RFSA" 
                    fill="#8B5CF6" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="radar" className="pt-4">
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#4B5563" />
                  <PolarAngleAxis 
                    dataKey="category" 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 1]} 
                    tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  />
                  <Radar 
                    name="Original RFSA" 
                    dataKey="original" 
                    stroke="#3E92CC" 
                    fill="#3E92CC" 
                    fillOpacity={0.3} 
                  />
                  <Radar 
                    name="Enhanced RFSA" 
                    dataKey="enhanced" 
                    stroke="#8B5CF6" 
                    fill="#8B5CF6" 
                    fillOpacity={0.3} 
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: 20, fontSize: 12 }} 
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FeatureAnalysisChart;
