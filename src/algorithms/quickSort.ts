import { SortingAlgorithm } from '../types';

export const quickSort: SortingAlgorithm = async (
  array,
  updateArray,
  updateIndices,
  incrementComparisons,
  incrementArrayAccesses,
  animationSpeed
) => {
  const arr = [...array];
  const sortedIndices: number[] = [];
  
  const partition = async (arr: number[], low: number, high: number): Promise<number> => {
    const pivot = arr[high];
    incrementArrayAccesses(1); // Access pivot
    
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
      updateIndices([j, high], sortedIndices);
      incrementComparisons();
      incrementArrayAccesses(1); // Access for comparison
      
      await new Promise(resolve => setTimeout(resolve, 100 / animationSpeed));
      
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        incrementArrayAccesses(2); // Access for swap
        updateArray([...arr]);
      }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    incrementArrayAccesses(2); // Access for swap
    updateArray([...arr]);
    
    return i + 1;
  };
  
  const quickSortRecursive = async (arr: number[], low: number, high: number) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      
      // Mark pivot as sorted
      sortedIndices.push(pi);
      updateIndices([], sortedIndices);
      
      // Sort elements before and after partition
      await quickSortRecursive(arr, low, pi - 1);
      await quickSortRecursive(arr, pi + 1, high);
    } else if (low >= 0 && high >= 0 && low < arr.length && high < arr.length) {
      // Mark single elements as sorted
      sortedIndices.push(low);
      updateIndices([], sortedIndices);
    }
  };
  
  await quickSortRecursive(arr, 0, arr.length - 1);
  
  // Mark all elements as sorted
  updateIndices([], Array.from({ length: arr.length }, (_, i) => i));
  return arr;
};