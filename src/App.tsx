import React from 'react';
import SortingVisualizer from './components/SortingVisualizer';
import { SortingVisualizerProvider } from './context/SortingContext';
import { AlgorithmInfoProvider } from './context/AlgorithmInfoContext';



function App() {
  return (
    <SortingVisualizerProvider>
      <AlgorithmInfoProvider>
        <div className="min-h-screen bg-slate-900 text-white">
          <SortingVisualizer />
        </div>
      </AlgorithmInfoProvider>
    </SortingVisualizerProvider>
  );
}

export default App;