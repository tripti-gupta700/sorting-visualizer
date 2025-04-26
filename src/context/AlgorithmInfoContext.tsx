import React, { createContext, useState, useContext } from 'react';
import { AlgorithmInfo } from '../types';
import { ALGORITHMS } from '../algorithms';

interface AlgorithmInfoContextType {
  algorithmInfo: AlgorithmInfo | null;
  setAlgorithmInfo: (info: AlgorithmInfo) => void;
}

const AlgorithmInfoContext = createContext<AlgorithmInfoContextType | undefined>(undefined);

export const AlgorithmInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [algorithmInfo, setAlgorithmInfo] = useState<AlgorithmInfo | null>(ALGORITHMS.bubble);
  
  const value = {
    algorithmInfo,
    setAlgorithmInfo
  };
  
  return (
    <AlgorithmInfoContext.Provider value={value}>
      {children}
    </AlgorithmInfoContext.Provider>
  );
};


export const useAlgorithmInfo = () => {
  const context = useContext(AlgorithmInfoContext);
  if (context === undefined) {
    throw new Error('useAlgorithmInfo must be used within an AlgorithmInfoProvider');
  }
  return context;
};