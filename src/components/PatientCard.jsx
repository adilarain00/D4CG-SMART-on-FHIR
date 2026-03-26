import React from 'react';

const PatientCard = ({ patient }) => {
  if (!patient) return null;

  return (
    <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm relative overflow-hidden group h-full transition-shadow hover:shadow-md border border-slate-100 flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110 pointer-events-none"></div>
      
      <div className="flex items-center gap-4 relative z-10 w-full">
        <div className="w-16 h-16 rounded-full bg-secondary-container flex-shrink-0 flex items-center justify-center text-on-secondary-container shadow-sm group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-500 border border-secondary/10">
          <img 
            src={`https://api.dicebear.com/8.x/notionists/svg?seed=${patient.id}&backgroundColor=e2e8f0`} 
            alt="Patient Avatar" 
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold text-on-surface font-headline group-hover:text-primary transition-colors flex items-center gap-2">
            {patient.name}
          </h2>
          <div className="mt-1 flex items-center gap-2 text-sm text-on-surface-variant font-medium">
            <span>{patient.id}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1 font-bold text-secondary">
              <span className="material-symbols-outlined !text-[14px]">water_drop</span>
              {patient.bloodType}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
