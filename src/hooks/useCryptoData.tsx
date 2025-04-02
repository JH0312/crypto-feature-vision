
import { useState, useEffect } from "react";
import { cryptoData, CryptoData } from "@/data/cryptoData";

export const useCryptoData = () => {
  const [data, setData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);

  useEffect(() => {
    // Simulate fetching data with a delay
    const fetchData = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(cryptoData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch cryptocurrency data");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const selectCrypto = (crypto: CryptoData) => {
    setSelectedCrypto(crypto);
  };

  const clearSelectedCrypto = () => {
    setSelectedCrypto(null);
  };

  return { data, loading, error, selectedCrypto, selectCrypto, clearSelectedCrypto };
};
