
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  ShieldCheck, 
  Search, 
  BarChart3, 
  PieChart, 
  Network,
  Lock,
  Code,
  CloudOff,
  Database
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
  },
  // Additional cryptocurrencies
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    price: 352.21,
    change24h: 1.45,
    marketCap: 58923456789,
    volume24h: 2457834901,
    malwareRisk: 17,
    riskFeatures: [
      {
        id: "centralization",
        name: "Centralization Risk",
        value: 68,
        status: "warning",
        description: "Risk associated with centralized control",
        icon: Database
      },
      {
        id: "transaction-volume",
        name: "Transaction Volume",
        value: 76,
        status: "normal",
        description: "Unusual transaction volumes or patterns",
        icon: BarChart3
      },
      {
        id: "dependency-risk",
        name: "Exchange Dependency",
        value: 59,
        status: "warning",
        description: "Risk associated with dependency on Binance exchange",
        icon: AlertTriangle
      },
      {
        id: "security-vulnerabilities",
        name: "Security Vulnerabilities",
        value: 22,
        status: "normal",
        description: "Known security issues in the blockchain",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    price: 7.89,
    change24h: 6.72,
    marketCap: 9654321098,
    volume24h: 765432109,
    malwareRisk: 14,
    riskFeatures: [
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 17,
        status: "normal",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "parachain-risk",
        name: "Parachain Risk",
        value: 35,
        status: "warning",
        description: "Risk associated with parachain connections",
        icon: Code
      },
      {
        id: "governance-risk",
        name: "Governance Risk",
        value: 29,
        status: "warning",
        description: "Risk associated with governance decisions",
        icon: Lock
      },
      {
        id: "security-vulnerabilities",
        name: "Security Vulnerabilities",
        value: 15,
        status: "normal",
        description: "Known security issues in the blockchain",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "avalanche",
    name: "Avalanche",
    symbol: "AVAX",
    price: 35.67,
    change24h: -2.34,
    marketCap: 12345678901,
    volume24h: 987654321,
    malwareRisk: 19,
    riskFeatures: [
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 23,
        status: "warning",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "consensus-vulnerability",
        name: "Consensus Vulnerability",
        value: 18,
        status: "normal",
        description: "Vulnerabilities in the consensus mechanism",
        icon: AlertTriangle
      },
      {
        id: "transaction-volume",
        name: "Transaction Volume",
        value: 67,
        status: "normal",
        description: "Unusual transaction volumes or patterns",
        icon: BarChart3
      },
      {
        id: "security-vulnerabilities",
        name: "Security Vulnerabilities",
        value: 31,
        status: "warning",
        description: "Known security issues in the blockchain",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "chainlink",
    name: "Chainlink",
    symbol: "LINK",
    price: 15.34,
    change24h: 4.56,
    marketCap: 7659432109,
    volume24h: 543219876,
    malwareRisk: 16,
    riskFeatures: [
      {
        id: "oracle-manipulation",
        name: "Oracle Manipulation",
        value: 25,
        status: "warning",
        description: "Risk of oracle manipulation",
        icon: AlertTriangle
      },
      {
        id: "data-availability",
        name: "Data Availability",
        value: 12,
        status: "normal",
        description: "Issues with data availability",
        icon: CloudOff
      },
      {
        id: "network-congestion",
        name: "Network Congestion",
        value: 33,
        status: "warning",
        description: "Congestion in the network affecting oracle updates",
        icon: Network
      },
      {
        id: "dependency-risk",
        name: "Project Dependencies",
        value: 28,
        status: "warning",
        description: "Risk associated with projects depending on Chainlink",
        icon: Code
      }
    ]
  },
  {
    id: "polygon",
    name: "Polygon",
    symbol: "MATIC",
    price: 0.87,
    change24h: 3.21,
    marketCap: 8765432109,
    volume24h: 654321098,
    malwareRisk: 15,
    riskFeatures: [
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 18,
        status: "normal",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "layer2-risks",
        name: "Layer 2 Risks",
        value: 27,
        status: "warning",
        description: "Risks associated with layer 2 scaling",
        icon: AlertTriangle
      },
      {
        id: "bridge-vulnerability",
        name: "Bridge Vulnerability",
        value: 42,
        status: "warning",
        description: "Vulnerabilities in cross-chain bridges",
        icon: Lock
      },
      {
        id: "security-vulnerabilities",
        name: "Security Vulnerabilities",
        value: 20,
        status: "normal",
        description: "Known security issues in the blockchain",
        icon: ShieldCheck
      }
    ]
  }
];
