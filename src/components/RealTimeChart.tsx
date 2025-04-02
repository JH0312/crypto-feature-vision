
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ChartContainer } from '@/components/ui/chart';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoData } from '@/data/cryptoData';

interface RealTimeChartProps {
  selectedCrypto: CryptoData | null;
  isRealTimeEnabled: boolean;
  onToggleRealTime: () => void;
}

interface PricePoint {
  time: string;
  price: number;
}

const MAX_DATA_POINTS = 30;

const RealTimeChart: React.FC<RealTimeChartProps> = ({ 
  selectedCrypto, 
  isRealTimeEnabled,
  onToggleRealTime
}) => {
  const [priceHistory, setPriceHistory] = useState<PricePoint[]>([]);
  const [priceChange, setPriceChange] = useState<number>(0);
  const lastPriceRef = useRef<number | null>(null);
  const cryptoNameRef = useRef<string | null>(null);
  
  // Reset chart data when crypto changes
  useEffect(() => {
    if (selectedCrypto && (cryptoNameRef.current !== selectedCrypto.name || priceHistory.length === 0)) {
      cryptoNameRef.current = selectedCrypto.name;
      
      // Initialize with current price
      const initialData: PricePoint[] = Array(MAX_DATA_POINTS)
        .fill(0)
        .map((_, index) => {
          const time = new Date(Date.now() - (MAX_DATA_POINTS - index) * 1000);
          return {
            time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            price: selectedCrypto.price
          };
        });
        
      setPriceHistory(initialData);
      lastPriceRef.current = selectedCrypto.price;
      setPriceChange(0);
    }
  }, [selectedCrypto, priceHistory.length]);
  
  // Update chart with new price data
  useEffect(() => {
    if (!selectedCrypto || !isRealTimeEnabled) return;
    
    const updateInterval = setInterval(() => {
      setPriceHistory(prevData => {
        // Remove first item if we're at max capacity
        const newData = [...prevData];
        if (newData.length >= MAX_DATA_POINTS) {
          newData.shift();
        }
        
        // Add new price point
        const time = new Date();
        newData.push({
          time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          price: selectedCrypto.price
        });
        
        // Calculate change
        if (lastPriceRef.current !== null) {
          const change = selectedCrypto.price - lastPriceRef.current;
          setPriceChange(change);
        }
        
        lastPriceRef.current = selectedCrypto.price;
        return newData;
      });
    }, 1000);
    
    return () => clearInterval(updateInterval);
  }, [selectedCrypto, isRealTimeEnabled]);
  
  // Handle price updates from props
  useEffect(() => {
    if (selectedCrypto && lastPriceRef.current !== null && selectedCrypto.price !== lastPriceRef.current) {
      // Update last point or add new point if real-time is enabled
      if (isRealTimeEnabled && priceHistory.length > 0) {
        setPriceHistory(prevData => {
          const newData = [...prevData];
          // Update the last point with the new price
          if (newData.length > 0) {
            const lastIndex = newData.length - 1;
            newData[lastIndex] = {
              ...newData[lastIndex],
              price: selectedCrypto.price
            };
          }
          return newData;
        });
        
        // Calculate change
        const change = selectedCrypto.price - lastPriceRef.current;
        setPriceChange(change);
        lastPriceRef.current = selectedCrypto.price;
      }
    }
  }, [selectedCrypto?.price, isRealTimeEnabled, priceHistory.length]);
  
  const domain = React.useMemo(() => {
    if (!priceHistory.length) return [0, 1];
    const prices = priceHistory.map(point => point.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    // Add 1% padding to the range
    const padding = (max - min) * 0.01;
    return [min - padding, max + padding];
  }, [priceHistory]);
  
  if (!selectedCrypto) {
    return (
      <Card className="border-gray-800 bg-crypto-chart-bg">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Select a cryptocurrency to view real-time chart</CardTitle>
        </CardHeader>
      </Card>
    );
  }
  
  return (
    <Card className="border-gray-800 bg-crypto-chart-bg">
      <CardHeader className="pb-2 flex flex-row justify-between items-center">
        <CardTitle className="text-lg font-medium">
          {selectedCrypto.name} Real-Time Price
        </CardTitle>
        <div className="flex items-center space-x-2">
          <Label htmlFor="real-time-toggle" className="text-sm">Real-time</Label>
          <Switch 
            id="real-time-toggle" 
            checked={isRealTimeEnabled}
            onCheckedChange={onToggleRealTime}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-2xl font-bold">
            ${selectedCrypto.price.toFixed(2)}
          </span>
          <div className={`flex items-center ${priceChange >= 0 ? 'text-crypto-green' : 'text-crypto-red'}`}>
            {priceChange >= 0 
              ? <TrendingUp className="h-5 w-5 mr-1" /> 
              : <TrendingDown className="h-5 w-5 mr-1" />}
            <span>
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)} ({((priceChange / selectedCrypto.price) * 100).toFixed(4)}%)
            </span>
          </div>
        </div>
        
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={priceHistory}
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" vertical={false} />
              <XAxis 
                dataKey="time" 
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                tickCount={5}
              />
              <YAxis 
                domain={domain}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                tickFormatter={(value) => `$${value.toFixed(2)}`}
                width={80}
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#E5E7EB' }}
                formatter={(value) => [`$${Number(value).toFixed(2)}`, 'Price']}
                labelFormatter={(label) => `Time: ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#818cf8" 
                strokeWidth={2}
                dot={false}
                isAnimationActive={false} // Disable animation for better performance
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 text-sm text-gray-400">
          {isRealTimeEnabled 
            ? "Chart updates in real-time with the latest price data."
            : "Enable real-time updates to see live price changes."
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeChart;
