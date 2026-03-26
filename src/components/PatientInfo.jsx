import React from 'react';

const PatientInfo = ({ patient }) => {
  if (!patient) return null;

  return (
    <section className="mt-12 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-on-surface px-4 border-l-4 border-primary font-headline">Patient Information</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-shadow hover:shadow-md">
           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
             <span className="material-symbols-outlined !text-[20px]">home_pin</span>
           </div>
           <div>
             <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Registered Address</p>
             <p className="text-on-surface font-medium leading-relaxed">{patient.address}</p>
           </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-shadow hover:shadow-md">
           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
             <span className="material-symbols-outlined !text-[20px]">call</span>
           </div>
           <div>
             <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Contact Details</p>
             <p className="text-on-surface font-medium leading-relaxed">{patient.contact}</p>
           </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-shadow hover:shadow-md">
           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
             <span className="material-symbols-outlined !text-[20px]">wc</span>
           </div>
           <div>
             <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Gender</p>
             <p className="text-on-surface font-medium leading-relaxed">{patient.gender}</p>
           </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-shadow hover:shadow-md">
           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
             <span className="material-symbols-outlined !text-[20px]">calendar_month</span>
           </div>
           <div>
             <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Date of Birth</p>
             <p className="text-on-surface font-medium leading-relaxed">{patient.birthDate} <span className="text-on-surface-variant text-sm ml-1">({patient.age})</span></p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PatientInfo;
