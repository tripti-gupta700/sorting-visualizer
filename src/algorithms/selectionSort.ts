import { SortingAlgorithm } from '../types';

export const selectionSort: SortingAlgorithm = async (
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
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      updateIndices([minIndex, j], sortedIndices);
      incrementComparisons();
      incrementArrayAccesses(2);
      
      await new Promise(resolve => setTimeout(resolve, 100 / animationSpeed));
      
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      updateArray([...arr]);
      incrementArrayAccesses(2);
    }
    
    // Mark current position as sorted
    sortedIndices.push(i);
    updateIndices([], sortedIndices);
  }
  
  // Mark all elements as sorted
  updateIndices([], Array.from({ length: n }, (_, i) => i));
  return arr;
};