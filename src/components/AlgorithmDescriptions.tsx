import React from 'react';
import { useAlgorithmInfo } from '../context/AlgorithmInfoContext';
import { InfoIcon } from 'lucide-react';

const AlgorithmDescriptions: React.FC = () => {
  const { algorithmInfo } = useAlgorithmInfo();

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg h-full">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <InfoIcon className="mr-2" />
        Algorithm Information
      </h2>
      
      {algorithmInfo ? (
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">{algorithmInfo.name}</h3>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-slate-400 mb-1">Description</h4>
            <p className="text-slate-300">{algorithmInfo.description}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-1">Time Complexity</h4>
              <p className="text-slate-300">{algorithmInfo.timeComplexity}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-1">Space Complexity</h4>
              <p className="text-slate-300">{algorithmInfo.spaceComplexity}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-slate-400 mb-1">Best Use Cases</h4>
            <ul className="list-disc list-inside text-slate-300">
              {algorithmInfo.bestUses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-400 mb-1">worst Use Cases</h4>
            <ul className="list-disc list-inside text-slate-300">
              {algorithmInfo.worstUses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-400 mb-1">Code Example</h4>
            <p className="list-disc list-inside text-slate-300">
              <pre>
                 <code>
                 {algorithmInfo.codeSnippet?.map((line, index)=>{
                   return <div key={index}>{line}</div>;
                 })}

                 </code>
                </pre>
              
            </p>
          </div>

        </div>
      ) : (
        <p className="text-slate-400">Select an algorithm to view information</p>
      )}
    </div>
  );
};

export default AlgorithmDescriptions;