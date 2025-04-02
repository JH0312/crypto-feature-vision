
import { useState, useEffect, useMemo, useRef } from "react";
import { cryptoData, CryptoData } from "@/data/cryptoData";
import { useToast } from "@/components/ui/use-toast";

export const useCryptoData = () => {
  const [data, setData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);
  const [filterValue, setFilterValue] = useState<string>("");
  const [sortBy, setSortBy] = useState<{
    field: "price" | "change24h" | "malwareRisk" | "marketCap",
    direction: "asc" | "desc"
  }>({ field: "marketCap", direction: "desc" });
  
  // Add real-time updates support
  const [isRealTimeEnabled, setIsRealTimeEnabled] = useState<boolean>(false);
  const updateIntervalRef = useRef<number | null>(null);
  
  const { toast } = useToast();

  // Function to simulate real-time price changes
  const simulatePriceChange = (currentPrice: number): number => {
    const changePercent = (Math.random() * 2 - 1) * 0.5; // Random change between -0.5% and +0.5%
    return currentPrice * (1 + changePercent / 100);
  };

  // Function to update crypto data with new prices
  const updateCryptoPrices = () => {
    setData(prevData => 
      prevData.map(crypto => {
        const newPrice = simulatePriceChange(crypto.price);
        const priceDiff = newPrice - crypto.price;
        const newChange24h = crypto.change24h + (priceDiff / crypto.price) * 20; // Amplify for demo
        
        // Create updated crypto object
        const updatedCrypto = {
          ...crypto,
          price: newPrice,
          change24h: newChange24h
        };
        
        // Also update in selected crypto if it's the current one
        if (selectedCrypto && selectedCrypto.id === crypto.id) {
          setSelectedCrypto(updatedCrypto);
        }
        
        return updatedCrypto;
      })
    );
  };

  // Toggle real-time updates
  const toggleRealTimeUpdates = () => {
    const newState = !isRealTimeEnabled;
    setIsRealTimeEnabled(newState);
    
    if (newState) {
      toast({
        description: "Real-time updates enabled",
      });
    } else {
      toast({
        description: "Real-time updates disabled",
      });
    }
  };

  useEffect(() => {
    // Simulate fetching data with a delay
    const fetchData = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(cryptoData);
        setLoading(false);
        
        // Show a notification that data was loaded
        toast({
          description: "Cryptocurrency data loaded successfully",
        });
      } catch (err) {
        setError("Failed to fetch cryptocurrency data");
        setLoading(false);
        console.error("Error fetching data:", err);
        
        toast({
          title: "Error loading data",
          description: "Failed to fetch cryptocurrency data",
          variant: "destructive",
        });
      }
    };

    fetchData();
  }, [toast]);

  // Set up and clean up real-time interval
  useEffect(() => {
    if (isRealTimeEnabled && data.length > 0) {
      // Update every second
      updateIntervalRef.current = window.setInterval(() => {
        updateCryptoPrices();
      }, 1000);
      
      console.log("Real-time updates enabled, interval set");
    } else if (updateIntervalRef.current !== null) {
      clearInterval(updateIntervalRef.current);
      updateIntervalRef.current = null;
      console.log("Real-time updates disabled, interval cleared");
    }
    
    return () => {
      if (updateIntervalRef.current !== null) {
        clearInterval(updateIntervalRef.current);
        console.log("Cleaning up interval on unmount");
      }
    };
  }, [isRealTimeEnabled, data.length]);

  const filteredAndSortedData = useMemo(() => {
    let result = [...data];
    
    // Apply filtering
    if (filterValue) {
      const searchTerm = filterValue.toLowerCase();
      result = result.filter(
        crypto => 
          crypto.name.toLowerCase().includes(searchTerm) || 
          crypto.symbol.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      const fieldA = a[sortBy.field];
      const fieldB = b[sortBy.field];
      
      if (sortBy.direction === 'asc') {
        return fieldA > fieldB ? 1 : -1;
      } else {
        return fieldA < fieldB ? 1 : -1;
      }
    });
    
    return result;
  }, [data, filterValue, sortBy]);

  const selectCrypto = (crypto: CryptoData) => {
    setSelectedCrypto(crypto);
  };

  const clearSelectedCrypto = () => {
    setSelectedCrypto(null);
  };
  
  const updateFilter = (value: string) => {
    setFilterValue(value);
  };
  
  const updateSort = (field: "price" | "change24h" | "malwareRisk" | "marketCap", direction: "asc" | "desc") => {
    setSortBy({ field, direction });
  };

  return { 
    data: filteredAndSortedData, 
    allData: data,
    loading, 
    error, 
    selectedCrypto, 
    selectCrypto, 
    clearSelectedCrypto,
    filterValue,
    updateFilter,
    sortBy,
    updateSort,
    isRealTimeEnabled,
    toggleRealTimeUpdates
  };
};
