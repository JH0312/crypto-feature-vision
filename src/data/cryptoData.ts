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
  Database,
  Globe,
  Zap,
  DollarSign,
  Share2,
  Activity,
  Server
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
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.1234,
    change24h: 7.65,
    marketCap: 15678901234,
    volume24h: 3456789012,
    malwareRisk: 19,
    riskFeatures: [
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 15,
        status: "normal",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "social-manipulation",
        name: "Social Manipulation",
        value: 45,
        status: "warning",
        description: "Risk of price manipulation through social media",
        icon: Share2
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
        value: 21,
        status: "warning",
        description: "Known security issues in the blockchain",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "USDT",
    price: 1.00,
    change24h: 0.01,
    marketCap: 83456789012,
    volume24h: 52456789012,
    malwareRisk: 23,
    riskFeatures: [
      {
        id: "centralization",
        name: "Centralization Risk",
        value: 78,
        status: "critical",
        description: "Risk associated with centralized control",
        icon: Database
      },
      {
        id: "backing-risk",
        name: "Reserve Backing",
        value: 42,
        status: "warning",
        description: "Risk related to asset backing claims",
        icon: DollarSign
      },
      {
        id: "regulatory-risk",
        name: "Regulatory Risk",
        value: 56,
        status: "warning",
        description: "Risk associated with regulatory actions",
        icon: AlertTriangle
      },
      {
        id: "blockchain-usage",
        name: "Blockchain Usage",
        value: 24,
        status: "normal",
        description: "How the stablecoin uses blockchain technology",
        icon: Server
      }
    ]
  },
  {
    id: "litecoin",
    name: "Litecoin",
    symbol: "LTC",
    price: 64.32,
    change24h: 1.75,
    marketCap: 4567890123,
    volume24h: 987654321,
    malwareRisk: 14,
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
        id: "mining-concentration",
        name: "Mining Concentration",
        value: 33,
        status: "warning",
        description: "Concentration of mining power",
        icon: Server
      },
      {
        id: "transaction-volume",
        name: "Transaction Volume",
        value: 28,
        status: "normal",
        description: "Unusual transaction volumes or patterns",
        icon: BarChart3
      },
      {
        id: "security-vulnerabilities",
        name: "Security Vulnerabilities",
        value: 11,
        status: "normal",
        description: "Known security issues in the blockchain",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "uniswap",
    name: "Uniswap",
    symbol: "UNI",
    price: 7.89,
    change24h: -2.43,
    marketCap: 5678901234,
    volume24h: 1234567890,
    malwareRisk: 21,
    riskFeatures: [
      {
        id: "smart-contract-risk",
        name: "Smart Contract Risk",
        value: 38,
        status: "warning",
        description: "Risk associated with smart contract vulnerabilities",
        icon: AlertTriangle
      },
      {
        id: "liquidity-risk",
        name: "Liquidity Risk",
        value: 43,
        status: "warning",
        description: "Risk associated with liquidity pools",
        icon: Activity
      },
      {
        id: "governance-risk",
        name: "Governance Risk",
        value: 25,
        status: "normal",
        description: "Risk associated with governance decisions",
        icon: Lock
      },
      {
        id: "interconnection-risk",
        name: "Protocol Interconnection",
        value: 51,
        status: "warning",
        description: "Risk from connections with other DeFi protocols",
        icon: Share2
      }
    ]
  },
  {
    id: "stellar",
    name: "Stellar",
    symbol: "XLM",
    price: 0.089,
    change24h: 3.21,
    marketCap: 2345678901,
    volume24h: 789012345,
    malwareRisk: 16,
    riskFeatures: [
      {
        id: "consensus-vulnerability",
        name: "Consensus Mechanism",
        value: 22,
        status: "normal",
        description: "Vulnerabilities in the consensus mechanism",
        icon: Globe
      },
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 19,
        status: "normal",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "regulatory-risk",
        name: "Regulatory Risk",
        value: 34,
        status: "warning",
        description: "Risk associated with regulatory actions",
        icon: AlertTriangle
      },
      {
        id: "centralization",
        name: "Centralization Risk",
        value: 41,
        status: "warning",
        description: "Risk associated with centralized control",
        icon: Database
      }
    ]
  },
  {
    id: "monero",
    name: "Monero",
    symbol: "XMR",
    price: 145.67,
    change24h: 5.43,
    marketCap: 2678901234,
    volume24h: 456789012,
    malwareRisk: 26,
    riskFeatures: [
      {
        id: "regulatory-risk",
        name: "Regulatory Risk",
        value: 73,
        status: "critical",
        description: "Risk associated with regulatory actions against privacy coins",
        icon: AlertTriangle
      },
      {
        id: "malicious-usage",
        name: "Malicious Usage",
        value: 68,
        status: "warning",
        description: "Risk associated with usage in illicit activities",
        icon: CloudOff
      },
      {
        id: "mining-vulnerability",
        name: "Mining Vulnerability",
        value: 29,
        status: "normal",
        description: "Vulnerabilities in the mining algorithm",
        icon: Server
      },
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 17,
        status: "normal",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      }
    ]
  },
  {
    id: "algorand",
    name: "Algorand",
    symbol: "ALGO",
    price: 0.187,
    change24h: 1.23,
    marketCap: 1456789012,
    volume24h: 345678901,
    malwareRisk: 13,
    riskFeatures: [
      {
        id: "consensus-vulnerability",
        name: "Consensus Mechanism",
        value: 14,
        status: "normal",
        description: "Vulnerabilities in the pure proof-of-stake consensus",
        icon: Globe
      },
      {
        id: "centralization",
        name: "Centralization Risk",
        value: 32,
        status: "warning",
        description: "Risk associated with centralized control",
        icon: Database
      },
      {
        id: "governance-risk",
        name: "Governance Risk",
        value: 21,
        status: "normal",
        description: "Risk associated with governance decisions",
        icon: Lock
      },
      {
        id: "security-vulnerabilities",
        name: "Security Vulnerabilities",
        value: 16,
        status: "normal",
        description: "Known security issues in the blockchain",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "vechain",
    name: "VeChain",
    symbol: "VET",
    price: 0.025,
    change24h: 4.56,
    marketCap: 1789012345,
    volume24h: 234567890,
    malwareRisk: 17,
    riskFeatures: [
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 23,
        status: "normal",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "enterprise-adoption",
        name: "Enterprise Adoption",
        value: 19,
        status: "normal",
        description: "Risk related to enterprise adoption claims",
        icon: Share2
      },
      {
        id: "consensus-vulnerability",
        name: "Consensus Mechanism",
        value: 27,
        status: "normal",
        description: "Vulnerabilities in the consensus mechanism",
        icon: Globe
      },
      {
        id: "centralization",
        name: "Centralization Risk",
        value: 44,
        status: "warning",
        description: "Risk associated with centralized control",
        icon: Database
      }
    ]
  },
  {
    id: "filecoin",
    name: "Filecoin",
    symbol: "FIL",
    price: 4.58,
    change24h: -1.25,
    marketCap: 2123456789,
    volume24h: 456123789,
    malwareRisk: 18,
    riskFeatures: [
      {
        id: "storage-risk",
        name: "Storage Reliability",
        value: 29,
        status: "normal",
        description: "Risk related to decentralized storage reliability",
        icon: Server
      },
      {
        id: "mining-concentration",
        name: "Mining Concentration",
        value: 47,
        status: "warning",
        description: "Concentration of storage mining power",
        icon: Database
      },
      {
        id: "network-anomalies",
        name: "Network Anomalies",
        value: 22,
        status: "normal",
        description: "Network behavior patterns that deviate from expected behavior",
        icon: Network
      },
      {
        id: "token-economics",
        name: "Token Economics",
        value: 36,
        status: "warning",
        description: "Risks related to token economic model",
        icon: DollarSign
      }
    ]
  }
];
