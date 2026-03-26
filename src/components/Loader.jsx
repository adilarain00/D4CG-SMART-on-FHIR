import React from 'react';

const Loader = ({ count = 3 }) => {
  return (
    <div className="space-y-4 w-full pb-12 max-w-4xl mx-auto">
      <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider px-2">Pending Transactions (Loading Clinical Records)</h4>
      <div className="bg-surface-container p-6 rounded-xl space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 animate-pulse">
            <div className="w-12 h-12 bg-surface-container-highest rounded-full flex-shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-surface-container-highest rounded w-3/4"></div>
              <div className="h-3 bg-surface-container-highest rounded w-1/2"></div>
            </div>
            <div className="w-16 h-4 bg-surface-container-highest rounded flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
