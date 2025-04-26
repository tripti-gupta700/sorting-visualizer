export interface AlgorithmInfo {
  name: string;
  execute: SortingAlgorithm;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  bestUses: string[];
  worstUses: string[];
  codeSnippet?: string[];
}

export type SortingAlgorithm = (
  array: number[],
  updateArray: (newArray: number[]) => void,
  updateIndices: (comparing: number[], sorted: number[]) => void,
  incrementComparisons: () => void,
  incrementArrayAccesses: (count?: number) => void,
  animationSpeed: number
) => Promise<number[]>;