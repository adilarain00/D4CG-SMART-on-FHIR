import React from 'react';
import MiniChart from './MiniChart';

const ObservationCard = ({ obs, isSecondary }) => {
  const bgPillClass = isSecondary ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-on-surface-variant';

  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between overflow-hidden relative min-h-[160px] border border-slate-100">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent to-transparent group-hover:from-primary/20 group-hover:to-transparent transition-colors"></div>
      
      <div>
        <div className="flex justify-between items-center mb-4 gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant truncate" title={obs.display}>{obs.display}</span>
          <span className={`px-2 py-1 ${bgPillClass} text-[10px] font-black rounded uppercase flex-shrink-0`}>Record</span>
        </div>
        
        <div className="flex items-baseline gap-2 flex-wrap min-h-[40px] mb-2">
          {obs.value !== null ? (
            <>
              <span className="text-4xl font-extrabold text-on-surface font-headline">{obs.value}</span>
              <span className="text-sm font-medium text-on-surface-variant max-w-[80px] truncate">{obs.unit}</span>
            </>
          ) : (
            <span className="text-lg font-extrabold text-on-surface font-headline w-full truncate" title={obs.valueString}>{obs.valueString || 'No Value'}</span>
          )}
        </div>
      </div>
      
      <div className="mt-auto">
        <MiniChart value={typeof obs.value === 'number' ? obs.value : 50} label={obs.display} />
        <p className="border-t border-slate-100 pt-3 text-[10px] font-medium text-on-surface-variant uppercase text-right w-full">Recorded {obs.date}</p>
      </div>
    </div>
  );
};

export default ObservationCard;
