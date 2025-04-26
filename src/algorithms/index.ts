import { bubbleSort } from './bubbleSort';
import { selectionSort } from './selectionSort';
import { insertionSort } from './insertionSort';
import { quickSort } from './quickSort';
import { mergeSort } from './mergeSort';
import { AlgorithmInfo } from '../types';

export const ALGORITHMS: Record<string, AlgorithmInfo> = {
  bubble: {
    name: 'Bubble Sort',
    execute: bubbleSort,
    description: 'A simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    bestUses: [
      'Educational purposes',
      'Small datasets',
      'When simplicity is more important than efficiency'
    ],
    worstUses: [
      'Large datasets',
      'When memory usage is a concern',
      'When the cost of swapping elements is high'
    ],
    codeSnippet: ['public class BubbleSort {',
  ' public static void bubbleSort(int arr[]) {',
    '  int n = arr.length;',
    '  for (int i = 0; i < n-1; i++) {',
      '  for (int j = 0; j < n-i-1; j++) {',
        '   if (arr[j] > arr[j+1]) {',
          // swap arr[j] and arr[j+1]
          '   int temp = arr[j];',
          '   arr[j] = arr[j+1];',
          '   arr[j+1] = temp;',
        '    }',
      '   }',
    '  }',
  ' }',
'}'
    ]
    
  },
  selection: {
    name: 'Selection Sort',
    execute: selectionSort,
    description: 'A sorting algorithm that divides the input list into two parts: a sorted sublist and an unsorted sublist. It repeatedly selects the smallest element from the unsorted sublist and moves it to the end of the sorted sublist.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    bestUses: [
      'Small datasets',
      'When memory usage is a concern',
      'When the cost of swapping elements is high'
    ],
    worstUses: [
      'Large datasets',
      'When memory usage is a concern',
      'When the cost of swapping elements is high'
    ],
    codeSnippet: ['public class selectionSort {',
      ' public static void selectionSort(int arr[]) {',
        '  int n = arr.length;',
        '  for (int i = 0; i < n-1; i++) {',
        '    int min = i;',
          '  for (int j = i+1; j < n; j++) {',
            '   if (arr[j] < arr[min]) {',
              '   min = j;',
            '    }',
          '  }',
          '    int temp = arr[min_idx];',
          '    arr[min_idx] = arr[i];',
          '    arr[i] = temp;',
        '  }',
      ' }',
    '}'
        ]
  },
  insertion: {
    name: 'Insertion Sort',
    execute: insertionSort,
    description: 'A simple sorting algorithm that builds the final sorted array one item at a time. It is efficient for small data sets and is often used as part of more sophisticated algorithms.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    bestUses: [
      'Small datasets',
      'Nearly sorted datasets',
      'Online algorithms (where new items are coming in)'
    ],
    worstUses: [
      'Large datasets',
      'When memory usage is a concern',
      'When the cost of swapping elements is high'      
    ],
    codeSnippet: ['public class insertionSort {',
      ' public static void bubbleSort(int arr[]) {',
        '  int n = arr.length;',
        '  for (int i = 1; i < n; ++i) {',
        '    int key = arr[i];',
        '    int j=i-1;',
          '  while(j >= 0 && arr[j] > key) {',
              '   arr[j+1] = arr[j];',
              '   j = j-1;',
            '    }',
            '     arr[j+1] = key;',
          '   }',
        '  }',
      ' }',
    '}'
        ]
  },
  quick: {
    name: 'Quick Sort',
    execute: quickSort,
    description: 'An efficient, divide-and-conquer sorting algorithm that selects a pivot element and partitions the array around it. It has a lower overhead than merge sort in many implementations.',
    timeComplexity: 'O(n log n) average, O(n²) worst case',
    spaceComplexity: 'O(log n)',
    bestUses: [
      'Large datasets',
      'General-purpose sorting',
      'When average performance matters more than worst-case'
    ],
    worstUses: [
      'Small datasets',
      'When memory usage is a concern',
      'When the cost of swapping elements is high'
    ],
    codeSnippet: ['public class quickSort {',
      ' public static void quickSort(int arr[], int low, int high) {',
        '  if (low < high) {',
        '    int pi = partition(arr, low, high);',
        '    quickSort(arr, low, pi - 1);',
        '    quickSort(arr, pi + 1, high);',
        '    }',
        '  }',
      ' static int partition(int arr[], int low, int high) {',
        '  int pivot = arr[high];',
        '  int i = (low - 1); // index of smaller element',
        '  for (int j = low; j < high; j++) {',
        '      if (arr[j] <= pivot) {',
        '        i++;',
        '        int temp = arr[i];',
        '        arr[i] = arr[j];',
        '        arr[j] = temp;',
        '        return i + 1;',
        
        '      }',
        '  }'
        ]

  },
  merge: {
    name: 'Merge Sort',
    execute: mergeSort,
    description: 'A divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves. It guarantees O(n log n) time complexity.',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    bestUses: [
      'Large datasets',
      'Stable sorting',
      'When worst-case performance is important'
    ],
    worstUses: [
      'Small datasets',
      'When memory usage is a concern',
      'When the cost of swapping elements is high'
    ],
    codeSnippet: ['public class MergeSort {',
      ' public static void mergeSort (int arr[], int low, int high) {',
        '  if (low < high) {',
        '    int m = l + (r - l) / 2;',
        '    mergeSort(arr, l, m);',
        '    mergeSort(arr, m + 1, r);',
        '    merge(arr, l, m, r);',
        '    }',
        '  }',
      ' static void merge(int arr[], int low, int m, int high) {',
        '   int n1 = m - l + 1;',
        '   int n2 = r - m;',
        '   int L[] = new int[n1];',
        '   int R[] = new int[n2];',
        '  for (int i = 0; i < n1; ++i)',
        '      L[i] = arr[l + i];',
        '  for (int j = 0; j < n2; ++j)',
        '      R[j] = arr[m + 1 + j];',
        '  int i = 0, j = 0;',
        '  int k = l;',
        '  while (i < n1 && j < n2) {',
        '    if (L[i] <= R[j]) {',
        '      arr[k] = L[i];',
        '      i++; }',
        '    else {',
        '      arr[k] = R[j];',
        '      j++; }',
        '  }',
        '  k++; ',
        '}',
        ' while (i < n1) {',
        '   arr[k] = L[i];',
        '   i++;',
        '   k++;',
        '}',
        ' while (j < n2) {',
        '   arr[k] = R[j];',
        '   j++;',
        '   k++;',
        '}'
        ]


  }
};