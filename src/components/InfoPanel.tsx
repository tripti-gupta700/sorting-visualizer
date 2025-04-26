import React from 'react';
import { useSortingVisualizer } from '../context/SortingContext';
import { useAlgorithmInfo } from '../context/AlgorithmInfoContext';
import { BarChart3, RefreshCw } from 'lucide-react';
// import { BarChart3, Clock, RefreshCw } from 'lucide-react';

const InfoPanel: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { comparisons, arrayAccesses, isSorting, selectedAlgorithm } = useSortingVisualizer();
  const { algorithmInfo } = useAlgorithmInfo();
  
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <BarChart3 className="mr-2" />
        Algorithm Statistics
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400 mb-1">Time Complexity</h3>
          <div>
            <p className="text-lg font-semibold">
              {algorithmInfo?.timeComplexity || 'N/A'}
            </p>
          </div>
        </div>
        
        <div className="bg-slate-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400 mb-1">Comparisons</h3>
          <div className="flex items-end gap-2">
            <p className="text-lg font-semibold">{comparisons}</p>
            {isSorting && <RefreshCw size={16} className="text-blue-400 animate-spin" />}
          </div>
        </div>
        
        <div className="bg-slate-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400 mb-1">Array Accesses</h3>
          <div className="flex items-end gap-2">
            <p className="text-lg font-semibold">{arrayAccesses}</p>
            {isSorting && <RefreshCw size={16} className="text-blue-400 animate-spin" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;