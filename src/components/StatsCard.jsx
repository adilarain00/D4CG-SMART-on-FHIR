import React from 'react';

const StatsCard = ({ title, value, subtitle, icon, colorClass }) => {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start">
        <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm ${colorClass} group-hover:scale-110 transition-transform`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className={`text-xs font-bold uppercase tracking-widest ${colorClass.replace('text-', 'text-')}`}>{subtitle}</span>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-on-surface-variant font-label">{title}</p>
        <p className="text-3xl font-extrabold text-on-surface mt-1 font-headline">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
