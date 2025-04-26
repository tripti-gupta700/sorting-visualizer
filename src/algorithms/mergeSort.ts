import { SortingAlgorithm } from '../types';

export const mergeSort: SortingAlgorithm = async (
  array,
  updateArray,
  updateIndices,
  incrementComparisons,
  incrementArrayAccesses,
  animationSpeed
) => {
  const arr = [...array];
  const sortedIndices: number[] = [];
  
  const merge = async (arr: number[], left: number, mid: number, right: number) => {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    
    // Create temp arrays
    const L = arr.slice(left, mid + 1);
    const R = arr.slice(mid + 1, right + 1);
    
    incrementArrayAccesses(n1 + n2); // Accessing elements for copying
    
    // Merge the temp arrays back into arr
    let i = 0, j = 0, k = left;
    
    while (i < n1 && j < n2) {
      updateIndices([left + i, mid + 1 + j], sortedIndices);
      incrementComparisons();
      incrementArrayAccesses(2); // Access for comparison
      
      await new Promise(resolve => setTimeout(resolve, 100 / animationSpeed));
      
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      
      incrementArrayAccesses(1); // Access for assignment
      k++;
      updateArray([...arr]);
    }
    
    // Copy remaining elements
    while (i < n1) {
      arr[k] = L[i];
      incrementArrayAccesses(1); // Access for assignment
      i++;
      k++;
      updateArray([...arr]);
    }
    
    while (j < n2) {
      arr[k] = R[j];
      incrementArrayAccesses(1); // Access for assignment
      j++;
      k++;
      updateArray([...arr]);
    }
  };
  
  const mergeSortRecursive = async (arr: number[], left: number, right: number) => {
    if (left < right) {
      const mid = Math.floor(left + (right - left) / 2);
      
      await mergeSortRecursive(arr, left, mid);
      await mergeSortRecursive(arr, mid + 1, right);
      
      await merge(arr, left, mid, right);
      
      // Mark sorted portion
      for (let i = left; i <= right; i++) {
        if (!sortedIndices.includes(i)) {
          sortedIndices.push(i);
        }
      }
      
      updateIndices([], sortedIndices);
    } else if (left === right) {
      // Single element is already sorted
      sortedIndices.push(left);
      updateIndices([], sortedIndices);
    }
  };
  
  await mergeSortRecursive(arr, 0, arr.length - 1);
  
  // Mark all elements as sorted
  updateIndices([], Array.from({ length: arr.length }, (_, i) => i));
  return arr;
};