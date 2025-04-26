import { SortingAlgorithm } from '../types';

export const insertionSort: SortingAlgorithm = async (
  array,
  updateArray,
  updateIndices,
  incrementComparisons,
  incrementArrayAccesses,
  animationSpeed
) => {
  const arr = [...array];
  const n = arr.length;
  const sortedIndices: number[] = [0]; // First element is already sorted
  
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    
    incrementArrayAccesses(1); // Access for key
    
    updateIndices([i], sortedIndices);
    await new Promise(resolve => setTimeout(resolve, 100 / animationSpeed));
    
    while (j >= 0) {
      updateIndices([j, i], sortedIndices);
      incrementComparisons();
      incrementArrayAccesses(1); // Access for comparison
      
      await new Promise(resolve => setTimeout(resolve, 100 / animationSpeed));
      
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
        incrementArrayAccesses(1); // Access for assignment
        j--;
        updateArray([...arr]);
      } else {
        break;
      }
    }
    
    arr[j + 1] = key;
    incrementArrayAccesses(1); // Access for assignment
    updateArray([...arr]);
    
    // Update sorted portion
    sortedIndices.push(i);
    updateIndices([], sortedIndices);
  }
  
  // Mark all elements as sorted
  updateIndices([], Array.from({ length: n }, (_, i) => i));
  return arr;
};