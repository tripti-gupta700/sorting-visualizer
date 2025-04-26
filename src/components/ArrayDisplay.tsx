import React from 'react';
import { useSortingVisualizer } from '../context/SortingContext';
import { motion } from 'framer-motion';

const ArrayDisplay: React.FC = () => {
  const { array, comparingIndices, sortedIndices } = useSortingVisualizer();
  
  const getBarColor = (index: number) => {
    if (comparingIndices.includes(index)) return 'bg-red-500';
    if (sortedIndices.includes(index)) return 'bg-green-500';
    return 'bg-blue-500';
  };

  return (
    <div className="h-64 sm:h-80 md:h-96 flex items-end justify-center gap-px">
      {array.map((value, index) => (
        <motion.div
          key={index}
          className={`${getBarColor(index)} w-full`}
          style={{ 
            height: `${(value / Math.max(...array)) * 100}%`,
            maxWidth: `${Math.max(2, 1000 / array.length)}px`
          }}
          layout
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: `${(value / Math.max(...array)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};

export default ArrayDisplay;