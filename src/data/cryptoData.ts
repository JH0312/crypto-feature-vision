
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  ShieldCheck, 
  Search, 
  BarChart3, 
  PieChart, 
  Network 
} from "lucide-react";

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  malwareRisk: number;
  riskFeatures: Feature[];
}

export interface Feature {
  id: string;
  name: string;
  value: number; 
  status: "normal" | "warning" | "critical";
  description: string;
  icon: any;
}

// Mock cryptocurrency data
export const cryptoData: CryptoData[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 42568.76,
    change24h: 2.35,
    marketCap: 823456789012,
    volume24h: 28976543210,
    malwareRisk: 12,
    riskFeatures: [
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 12,
        status: "normal",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "transaction-volume",
        name: "Transaction Volume",
        value: 85,
        status: "normal",
        description: "Unusual transaction volumes or patterns",
        icon: BarChart3
      },
      {
        id: "price-manipulation",
        name: "Price Manipulation",
        value: 8,
        status: "normal",
        description: "Signs of artificial price manipulation",
        icon: TrendingUp
      },
      {
        id: "security-vulnerabilities",
        name: "Security Vulnerabilities",
        value: 14,
        status: "normal",
        description: "Known security issues in the blockchain",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 2341.89,
    change24h: -1.23,
    marketCap: 278965432100,
    volume24h: 12354678900,
    malwareRisk: 18,
    riskFeatures: [
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 19,
        status: "normal",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "smart-contract-risk",
        name: "Smart Contract Risk",
        value: 31,
        status: "warning",
        description: "Risk associated with smart contract vulnerabilities",
        icon: AlertTriangle
      },
      {
        id: "price-manipulation",
        name: "Price Manipulation",
        value: 9,
        status: "normal",
        description: "Signs of artificial price manipulation",
        icon: TrendingUp
      },
      {
        id: "security-vulnerabilities",
        name: "Security Vulnerabilities",
        value: 18,
        status: "normal",
        description: "Known security issues in the blockchain",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0.5723,
    change24h: 5.68,
    marketCap: 19876543210,
    volume24h: 1234567890,
    malwareRisk: 15,
    riskFeatures: [
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 9,
        status: "normal",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "smart-contract-risk",
        name: "Smart Contract Risk",
        value: 22,
        status: "warning",
        description: "Risk associated with smart contract vulnerabilities",
        icon: AlertTriangle
      },
      {
        id: "transaction-volume",
        name: "Transaction Volume",
        value: 43,
        status: "normal",
        description: "Unusual transaction volumes or patterns",
        icon: BarChart3
      },
      {
        id: "node-distribution",
        name: "Node Distribution",
        value: 12,
        status: "normal",
        description: "The distribution pattern of nodes in the network",
        icon: PieChart
      }
    ]
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 123.45,
    change24h: 8.91,
    marketCap: 48765432100,
    volume24h: 3456789012,
    malwareRisk: 22,
    riskFeatures: [
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 32,
        status: "warning",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "smart-contract-risk",
        name: "Smart Contract Risk",
        value: 28,
        status: "warning",
        description: "Risk associated with smart contract vulnerabilities",
        icon: AlertTriangle
      },
      {
        id: "transaction-volume",
        name: "Transaction Volume",
        value: 78,
        status: "normal",
        description: "Unusual transaction volumes or patterns",
        icon: BarChart3
      },
      {
        id: "censorship-resistance",
        name: "Censorship Resistance",
        value: 54,
        status: "warning",
        description: "Ability to resist censorship attempts",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "ripple",
    name: "Ripple",
    symbol: "XRP",
    price: 0.6723,
    change24h: -3.24,
    marketCap: 32145678900,
    volume24h: 2134567890,
    malwareRisk: 27,
    riskFeatures: [
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 38,
        status: "warning",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "transaction-volume",
        name: "Transaction Volume",
        value: 92,
        status: "critical",
        description: "Unusual transaction volumes or patterns",
        icon: BarChart3
      },
      {
        id: "price-manipulation",
        name: "Price Manipulation",
        value: 18,
        status: "normal",
        description: "Signs of artificial price manipulation",
        icon: TrendingUp
      },
      {
        id: "regulatory-risk",
        name: "Regulatory Risk",
        value: 63,
        status: "warning",
        description: "Risk associated with regulatory actions",
        icon: AlertTriangle
      }
    ]
  }
];
