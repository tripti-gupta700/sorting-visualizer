import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { ALGORITHMS } from '../algorithms';

interface SortingVisualizerContextType {
  array: number[];
  generateNewArray: (size?: number) => void;
  arraySize: number;
  setArraySize: (size: number) => void;
  animationSpeed: number;
  setAnimationSpeed: (speed: number) => void;
  selectedAlgorithm: string;
  setSelectedAlgorithm: (algorithm: string) => void;
  isSorting: boolean;
  startSorting: () => void;
  pauseSorting: () => void;
  resetSorting: () => void;
  comparingIndices: number[];
  sortedIndices: number[];
  comparisons: number;
  arrayAccesses: number;
}

const SortingVisualizerContext = createContext<SortingVisualizerContextType | undefined>(undefined);

export const SortingVisualizerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [array, setArray] = useState<number[]>([]);
  const [arraySize, setArraySize] = useState<number>(50);
  const [animationSpeed, setAnimationSpeed] = useState<number>(5);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>('bubble');
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [comparingIndices, setComparingIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [comparisons, setComparisons] = useState<number>(0);
  const [arrayAccesses, setArrayAccesses] = useState<number>(0);
  
  // Generate random array
  const generateNewArray = useCallback((size = arraySize) => {
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 5);
    setArray(newArray);
    setComparingIndices([]);
    setSortedIndices([]);
    setComparisons(0);
    setArrayAccesses(0);
  }, [arraySize]);
  
  // Initialize array on component mount and when array size changes
  useEffect(() => {
    generateNewArray();
  }, [generateNewArray, arraySize]);
  
  // Update array with new size
  const handleArraySizeChange = (size: number) => {
    if (!isSorting) {
      setArraySize(size);
    }
  };
  
  // Start sorting
  const startSorting = async () => {
    if (isSorting && isPaused) {
      setIsPaused(false);
      return;
    }
    
    if (!isSorting) {
      setIsSorting(true);
      setComparisons(0);
      setArrayAccesses(0);
      
      try {
        const sortFunction = ALGORITHMS[selectedAlgorithm].execute;
        
        await sortFunction(
          array,
          (newArray: number[]) => setArray(newArray),
          (comparing: number[], sorted: number[]) => {
            setComparingIndices(comparing);
            setSortedIndices(sorted);
          },
          () => setComparisons(prev => prev + 1),
          (count = 1) => setArrayAccesses(prev => prev + count),
          animationSpeed
        );
        
        // Mark all elements as sorted when algorithm completes
        setComparingIndices([]);
        setSortedIndices(Array.from({ length: array.length }, (_, i) => i));
      } catch (error) {
        console.error('Error during sorting:', error);
      }
      
      setIsSorting(false);
    }
  };
  
  // Pause sorting
  const pauseSorting = () => {
    setIsPaused(true);
  };
  
  // Reset sorting
  const resetSorting = () => {
    setIsSorting(false);
    setIsPaused(false);
    generateNewArray();
  };
  
  const value = {
    array,
    generateNewArray,
    arraySize,
    setArraySize: handleArraySizeChange,
    animationSpeed,
    setAnimationSpeed,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isSorting,
    startSorting,
    pauseSorting,
    resetSorting,
    comparingIndices,
    sortedIndices,
    comparisons,
    arrayAccesses
  };
  
  return (
    <SortingVisualizerContext.Provider value={value}>
      {children}
    </SortingVisualizerContext.Provider>
  );
};

export const useSortingVisualizer = () => {
  const context = useContext(SortingVisualizerContext);
  if (context === undefined) {
    throw new Error('useSortingVisualizer must be used within a SortingVisualizerProvider');
  }
  return context;
};