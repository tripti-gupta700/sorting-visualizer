import React from 'react';
import { 
  Play, Pause, RefreshCw, 
  Clock, ChevronUp, ChevronDown
} from 'lucide-react';
import { useSortingVisualizer } from '../context/SortingContext';
import { useAlgorithmInfo } from '../context/AlgorithmInfoContext';
import { ALGORITHMS } from '../algorithms';

const Controls: React.FC = () => {
  const { 
    generateNewArray, 
    arraySize, 
    setArraySize, 
    animationSpeed,
    setAnimationSpeed,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isSorting,
    startSorting,
    pauseSorting,
    resetSorting
  } = useSortingVisualizer();
  
  const { setAlgorithmInfo } = useAlgorithmInfo();

  const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newAlgorithm = e.target.value;
    setSelectedAlgorithm(newAlgorithm);
    setAlgorithmInfo(ALGORITHMS[newAlgorithm]);
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="arraySize" className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Array Size: {arraySize}</span>
            <div className="flex gap-1">
              <button 
                onClick={() => setArraySize(Math.max(5, arraySize - 5))}
                className="p-1 text-slate-400 hover:text-white"
                disabled={isSorting}
              >
                <ChevronDown size={16} />
              </button>
              <button 
                onClick={() => setArraySize(Math.min(150, arraySize + 5))}
                className="p-1 text-slate-400 hover:text-white"
                disabled={isSorting}
              >
                <ChevronUp size={16} />
              </button>
            </div>
          </label>
          <input 
            type="range" 
            id="arraySize" 
            min="5" 
            max="150" 
            value={arraySize} 
            onChange={(e) => setArraySize(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            disabled={isSorting}
          />
        </div>
        
        <div>
          <label htmlFor="speed" className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Animation Speed</span>
            <div className="flex gap-1">
              <button 
                onClick={() => setAnimationSpeed(Math.max(1, animationSpeed - 1))}
                className="p-1 text-slate-400 hover:text-white"
                disabled={isSorting}
              >
                <Clock size={16} />
              </button>
              <button 
                onClick={() => setAnimationSpeed(Math.min(10, animationSpeed + 1))}
                className="p-1 text-slate-400 hover:text-white"
                disabled={isSorting}
              >
                <Clock size={16} className="rotate-90" />
              </button>
            </div>
          </label>
          <input 
            type="range" 
            id="speed" 
            min="1" 
            max="10" 
            value={animationSpeed} 
            onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            disabled={isSorting}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="algorithm" className="block text-sm font-medium mb-2">Select Algorithm</label>
          <select
            id="algorithm"
            value={selectedAlgorithm}
            onChange={handleAlgorithmChange}
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
            disabled={isSorting}
          >
            {Object.keys(ALGORITHMS).map(key => (
              <option key={key} value={key}>{ALGORITHMS[key].name}</option>
            ))}
          </select>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => generateNewArray()}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md"
            disabled={isSorting}
          >
            <RefreshCw size={16} />
            <span>New Array</span>
          </button>
          
          {!isSorting ? (
            <button
              type="button"
              onClick={startSorting}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
            >
              <Play size={16} />
              <span>Start</span>
            </button>
          ) : (
            <>
              <button
                onClick={pauseSorting}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-md"
              >
                <Pause size={16} />
                <span>Pause</span>
              </button>
              <button
                onClick={resetSorting}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md"
              >
                <RefreshCw size={16} />
                <span>Reset</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Controls;