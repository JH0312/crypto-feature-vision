
export interface FeatureImportance {
  id: string;
  name: string;
  original: number;
  enhanced: number;
  category: 'market' | 'network' | 'security' | 'regulatory';
}

export const featureImportanceData: FeatureImportance[] = [
  // Market features
  { id: 'price_volatility', name: 'Price Volatility', original: 0.68, enhanced: 0.82, category: 'market' },
  { id: 'volume_spikes', name: 'Volume Spikes', original: 0.72, enhanced: 0.85, category: 'market' },
  { id: 'market_depth', name: 'Market Depth', original: 0.45, enhanced: 0.61, category: 'market' },
  { id: 'price_correlation', name: 'Price Correlation', original: 0.52, enhanced: 0.67, category: 'market' },
  { id: 'liquidity_metrics', name: 'Liquidity Metrics', original: 0.56, enhanced: 0.73, category: 'market' },
  
  // Network features
  { id: 'transaction_volume', name: 'Transaction Volume', original: 0.81, enhanced: 0.89, category: 'network' },
  { id: 'active_addresses', name: 'Active Addresses', original: 0.64, enhanced: 0.78, category: 'network' },
  { id: 'network_hashrate', name: 'Network Hashrate', original: 0.49, enhanced: 0.62, category: 'network' },
  { id: 'node_distribution', name: 'Node Distribution', original: 0.37, enhanced: 0.51, category: 'network' },
  { id: 'pending_transactions', name: 'Pending Transactions', original: 0.59, enhanced: 0.72, category: 'network' },
  
  // Security features
  { id: 'code_vulnerabilities', name: 'Code Vulnerabilities', original: 0.91, enhanced: 0.94, category: 'security' },
  { id: 'wallet_anomalies', name: 'Wallet Anomalies', original: 0.75, enhanced: 0.87, category: 'security' },
  { id: 'exploit_patterns', name: 'Exploit Patterns', original: 0.88, enhanced: 0.92, category: 'security' },
  { id: 'forking_events', name: 'Forking Events', original: 0.41, enhanced: 0.56, category: 'security' },
  { id: 'mempool_behavior', name: 'Mempool Behavior', original: 0.62, enhanced: 0.74, category: 'security' },
  
  // Regulatory features
  { id: 'compliance_status', name: 'Compliance Status', original: 0.31, enhanced: 0.48, category: 'regulatory' },
  { id: 'legal_actions', name: 'Legal Actions', original: 0.27, enhanced: 0.44, category: 'regulatory' },
  { id: 'governance_structure', name: 'Governance Structure', original: 0.39, enhanced: 0.53, category: 'regulatory' },
  { id: 'kyc_requirements', name: 'KYC Requirements', original: 0.22, enhanced: 0.38, category: 'regulatory' },
  { id: 'jurisdictional_exposure', name: 'Jurisdictional Exposure', original: 0.29, enhanced: 0.47, category: 'regulatory' }
];

export interface MalwareDetectionStats {
  category: string;
  original: number;
  enhanced: number;
}

export const malwareStats: MalwareDetectionStats[] = [
  { category: "True Positives", original: 78, enhanced: 89 },
  { category: "False Positives", original: 12, enhanced: 7 },
  { category: "True Negatives", original: 82, enhanced: 91 },
  { category: "False Negatives", original: 18, enhanced: 8 }
];

export interface PredictionStats {
  crypto: string;
  originalAccuracy: number;
  enhancedAccuracy: number;
  originalAUC: number;
  enhancedAUC: number;
}

export const predictionStats: PredictionStats[] = [
  { crypto: "Bitcoin", originalAccuracy: 0.82, enhancedAccuracy: 0.91, originalAUC: 0.84, enhancedAUC: 0.93 },
  { crypto: "Ethereum", originalAccuracy: 0.79, enhancedAccuracy: 0.88, originalAUC: 0.81, enhancedAUC: 0.90 },
  { crypto: "Cardano", originalAccuracy: 0.77, enhancedAccuracy: 0.85, originalAUC: 0.79, enhancedAUC: 0.87 },
  { crypto: "Solana", originalAccuracy: 0.74, enhancedAccuracy: 0.83, originalAUC: 0.76, enhancedAUC: 0.86 },
  { crypto: "Ripple", originalAccuracy: 0.71, enhancedAccuracy: 0.81, originalAUC: 0.73, enhancedAUC: 0.84 }
];
