import React from 'react';

const ErrorState = ({ message, onRetry, onDisconnect }) => {
  return (
    <div className="space-y-4 pb-12 w-full max-w-2xl mx-auto mt-8">
      <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider px-2 text-center flex items-center justify-center gap-2">
         <span className="material-symbols-outlined !text-lg">report</span>
         Resource Connectivity
      </h4>
      <div className="bg-error-container/10 border border-error-container/20 p-8 rounded-xl flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-error-container text-on-error-container rounded-full flex items-center justify-center mb-4">
          <span className="material-symbols-outlined !text-3xl">sync_problem</span>
        </div>
        <h5 className="text-lg font-bold text-on-surface font-headline">External Sync Interrupted</h5>
        <p className="text-on-surface-variant text-sm mt-3 max-w-sm leading-relaxed">
          {message || "We're having trouble reaching the regional medical records server. The FHIR ID may be invalid or the cache is cleared."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
          {onRetry && (
            <button 
              onClick={onRetry} 
              className="w-full sm:w-auto flex-1 max-w-[200px] flex items-center justify-center gap-2 px-6 py-3 bg-on-surface text-surface rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-on-surface/20 hover:bg-black"
            >
              <span className="material-symbols-outlined !text-sm">refresh</span>
              Retry Request
            </button>
          )}
          {onDisconnect && (
            <button 
              onClick={onDisconnect} 
              className="w-full sm:w-auto flex-1 max-w-[200px] flex items-center justify-center gap-2 px-6 py-3 bg-white text-on-surface border border-slate-200 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-sm hover:bg-slate-50"
            >
              <span className="material-symbols-outlined !text-sm">search</span>
              New Patient
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
