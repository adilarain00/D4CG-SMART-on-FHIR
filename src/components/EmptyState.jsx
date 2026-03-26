import React, { useState } from 'react';

const EmptyState = ({ onConnect }) => {
  const [val, setVal] = useState(''); 
  
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[60vh] px-4">
      <div className="bg-surface-container-low border border-surface-container-high rounded-[2rem] p-8 sm:p-14 flex flex-col items-center text-center relative overflow-hidden shadow-sm max-w-xl w-full">
        {/* Decorative Background Assets */}
        <div className="w-48 h-48 bg-primary/5 rounded-full flex items-center justify-center text-primary absolute -top-12 -right-12 pointer-events-none" />
        <div className="w-64 h-64 bg-secondary/5 rounded-full flex items-center justify-center mb-6 text-secondary absolute -bottom-24 -left-20 pointer-events-none" />
        
        <div className="w-20 h-20 bg-white shadow-md text-primary rounded-[1.5rem] flex items-center justify-center mb-8 z-10 transition-transform hover:scale-105 hover:shadow-lg border border-primary/10">
          <span className="material-symbols-outlined !text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>admin_meds</span>
        </div>
        
        <h3 className="text-2xl font-extrabold text-on-surface font-headline z-10 mb-3 tracking-tight">Patient Search Access</h3>
        <p className="text-on-surface-variant max-w-sm z-10 mb-6 font-medium leading-relaxed">
          Securely lookup patient vitals and demographic data. Select a local demo node or enter an ID manually.
        </p>
        
        {/* Interactive Demo Triggers */}
        <div className="flex gap-2 justify-center mb-6 flex-wrap z-10 w-full animate-in fade-in zoom-in duration-500">
           <span className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest block w-full text-center mb-1">Available Mock Clients</span>
           <button onClick={() => { setVal('1001'); setTimeout(() => onConnect('1001'), 150); }} className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20 shadow-sm active:scale-95 flex items-center gap-1">
             <span className="material-symbols-outlined !text-xs">person</span> 1001 (Alex)
           </button>
           <button onClick={() => { setVal('1002'); setTimeout(() => onConnect('1002'), 150); }} className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20 shadow-sm active:scale-95 flex items-center gap-1">
             <span className="material-symbols-outlined !text-xs">person</span> 1002 (Maria)
           </button>
           <button onClick={() => { setVal('1003'); setTimeout(() => onConnect('1003'), 150); }} className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-primary hover:bg-primary hover:text-white transition-colors border border-primary/20 shadow-sm active:scale-95 flex items-center gap-1">
             <span className="material-symbols-outlined !text-xs">person</span> 1003 (James)
           </button>
        </div>

        <form 
          onSubmit={(e) => { e.preventDefault(); if (val.trim()) onConnect(val.trim()); }} 
          className="flex gap-2 w-full z-10 bg-white p-2 rounded-full shadow-md border border-slate-100 hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-primary/50"
        >
          <input 
            type="text" 
            placeholder="Manual ID (e.g. 1001)"
            value={val}
            onChange={e => setVal(e.target.value)}
            className="flex-1 bg-transparent border-none text-on-surface font-bold focus:ring-0 px-5 outline-none font-body placeholder:font-normal placeholder:text-slate-400 w-full"
            required
          />
          <button type="submit" className="bg-primary hover:bg-primary-dim text-on-primary px-6 sm:px-8 py-3 rounded-full font-bold transition-all active:scale-95 flex flex-shrink-0 items-center justify-center gap-2">
            Search
            <span className="material-symbols-outlined !text-sm hidden sm:inline-block">arrow_forward</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmptyState;
