import React from 'react';
import Controls from './Controls';
import ArrayDisplay from './ArrayDisplay';
import InfoPanel from './InfoPanel';
import AlgorithmDescriptions from './AlgorithmDescriptions';
import ChatInterface from './chatInterface';
import { useSortingVisualizer } from '../context/SortingContext';

const SortingVisualizer: React.FC = () => {
  const { isSorting } = useSortingVisualizer();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">Sorting Algorithm Visualizer</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Visualize how different sorting algorithms work with interactive animations and real-time statistics.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
            <ArrayDisplay />
            <Controls />
          </div>
          
          <div className="mt-8">
            <InfoPanel />
          </div>
          
          <div className="mt-8">
            <ChatInterface />
          </div>
        </div>
        
        <div>
          <AlgorithmDescriptions />
        </div>
      </div>
      
      {isSorting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-4 rounded-lg shadow-lg">
            <p className="text-xl font-medium">Sorting in progress...</p>
            <p className="text-sm text-slate-400 mt-2">Please wait or reset to stop</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortingVisualizer;