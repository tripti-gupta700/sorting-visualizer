import { SortingAlgorithm } from '../types';

export const bubbleSort: SortingAlgorithm = async (
  array,
  updateArray,
  updateIndices,
  incrementComparisons,
  incrementArrayAccesses,
  animationSpeed
) => {
  const arr = [...array];
  const n = arr.length;
  const sortedIndices: number[] = [];
  
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      updateIndices([j, j + 1], sortedIndices);
      incrementComparisons();
      incrementArrayAccesses(2);
      
      await new Promise(resolve => setTimeout(resolve, 100 / animationSpeed));
      
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        updateArray([...arr]);
        incrementArrayAccesses(2);
        swapped = true;
      }
    }
    
    // Mark current position as sorted
    sortedIndices.push(n - i - 1);
    updateIndices([], sortedIndices);
    
    // If no swapping occurred in this pass, array is sorted
    if (!swapped) break;
  }
  
  // Mark all elements as sorted
  updateIndices([], Array.from({ length: n }, (_, i) => i));
  return arr;
};