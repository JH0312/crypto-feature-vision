
import React, { useEffect, useRef } from 'react';
import { ArrowUp, ArrowDown, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CryptoData } from '@/data/cryptoData';
import { Progress } from '@/components/ui/progress';

interface CryptoCardProps {
  crypto: CryptoData;
  onClick: (crypto: CryptoData) => void;
}

const formatNumber = (num: number): string => {
  if (num >= 1e12) return (num / 1e12).toFixed(2) + 'T';
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
  return num.toFixed(2);
};

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto, onClick }) => {
  const isPositive = crypto.change24h >= 0;
  const riskColor = crypto.malwareRisk > 20 
    ? "bg-crypto-red" 
    : crypto.malwareRisk > 15 
      ? "bg-yellow-500" 
      : "bg-crypto-green";
      
  const lastPriceRef = useRef<number>(crypto.price);
  const priceRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Flash animation when price changes
  useEffect(() => {
    if (priceRef.current && crypto.price !== lastPriceRef.current) {
      const direction = crypto.price > lastPriceRef.current ? 'up' : 'down';
      const className = direction === 'up' ? 'flash-green' : 'flash-red';
      
      priceRef.current.classList.add(className);
      
      // Remove class after animation completes
      setTimeout(() => {
        if (priceRef.current) {
          priceRef.current.classList.remove(className);
        }
      }, 1000);
      
      lastPriceRef.current = crypto.price;
    }
  }, [crypto.price]);

  return (
    <Card 
      ref={cardRef}
      className="crypto-card border border-gray-800 overflow-hidden hover:border-gray-600 cursor-pointer transition-all duration-300 hover:shadow-md"
      onClick={() => onClick(crypto)}
    >
      <CardHeader className="p-4 pb-2 flex flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-gradient-to-br from-crypto-blue to-crypto-purple p-1 h-8 w-8 flex items-center justify-center">
            <span className="text-xs font-bold text-white">{crypto.symbol}</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg">{crypto.name}</h3>
            <p className="text-xs text-gray-400">{crypto.symbol}</p>
          </div>
        </div>
        <div className="flex items-center">
          {crypto.malwareRisk > 20 ? (
            <AlertTriangle className="h-5 w-5 text-crypto-red" />
          ) : (
            <ShieldCheck className="h-5 w-5 text-crypto-green" />
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <div className="flex justify-between items-center mb-2">
          <span 
            ref={priceRef}
            className="font-bold text-xl transition-colors duration-300"
          >
            ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <div className={`flex items-center ${isPositive ? 'text-crypto-green' : 'text-crypto-red'}`}>
            {isPositive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
            <span className="font-medium">{Math.abs(crypto.change24h).toFixed(2)}%</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Market Cap</span>
            <span className="font-medium text-gray-300">${formatNumber(crypto.marketCap)}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>24h Volume</span>
            <span className="font-medium text-gray-300">${formatNumber(crypto.volume24h)}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>Risk Score</span>
            <span className="font-medium text-gray-300">{crypto.malwareRisk}%</span>
          </div>
          <div className="mt-2">
            <Progress value={crypto.malwareRisk} className="h-1.5" indicatorClassName={riskColor} />
          </div>
        </div>
      </CardContent>
      
      {/* Price change indicator overlay */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes flash-green {
            0%, 100% { background-color: transparent; }
            50% { background-color: rgba(52, 211, 153, 0.15); }
          }
          @keyframes flash-red {
            0%, 100% { background-color: transparent; }
            50% { background-color: rgba(239, 68, 68, 0.15); }
          }
          .flash-green {
            animation: flash-green 1s ease;
          }
          .flash-red {
            animation: flash-red 1s ease;
          }
        `
      }} />
    </Card>
  );
};

export default CryptoCard;
