import React, { useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { usePatientData } from '../hooks/usePatientData';
import { normalizePatient, normalizeObservations } from '../utils/normalizeData';
import PatientCard from '../components/PatientCard';
import StatsCard from '../components/StatsCard';
import ObservationList from '../components/ObservationList';
import PatientInfo from '../components/PatientInfo';
import ErrorState from '../components/ErrorState';
import Loader from '../components/Loader';

const DashboardPage = ({ activePatientId, onDisconnect }) => {
  const { patient, observations, isLoading, isError, error } = usePatientData(activePatientId);
  const queryClient = useQueryClient();

  const normalizedPatient = useMemo(() => patient ? normalizePatient(patient) : null, [patient]);
  const normalizedObservations = useMemo(() => observations ? normalizeObservations(observations) : [], [observations]);

  const uniqueCodes = useMemo(() => {
    const codes = new Set(normalizedObservations.map(o => o.display));
    return codes.size;
  }, [normalizedObservations]);

  const handleRetry = () => {
    // Correct React Query v5 syntax for invalidation targeting exact array
    queryClient.invalidateQueries({ queryKey: ['patient', activePatientId] });
    queryClient.invalidateQueries({ queryKey: ['observations', activePatientId] });
  };

  if (!activePatientId) return null; // App.js catches this and renders EmptyState

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full animate-in fade-in duration-500">
        <div className="col-span-1 lg:col-span-12">
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] h-48 animate-pulse shadow-sm border border-slate-100 flex items-center justify-center relative overflow-hidden">
             
            <div className="flex flex-col items-center">
               <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
               <span className="font-headline font-bold text-on-surface-variant text-center">Connecting to Server Node...<br/><span className="text-secondary">Fetching records for FHIR ID: {activePatientId}</span></span>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-12 flex justify-center mt-6">
           <Loader count={4} />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-12 animate-in slide-in-from-bottom-4 duration-500">
        <ErrorState 
          message={error?.message || `Failed to fetch FHIR records for ID: ${activePatientId}`} 
          onRetry={handleRetry} 
          onDisconnect={onDisconnect}
        />
      </div>
    );
  }

  if (!normalizedPatient) {
     return (
       <div className="mt-12 animate-in slide-in-from-bottom-4 duration-500">
         <ErrorState 
           message={`Patient '${activePatientId}' not found in the HAPI FHIR server. Their records may have been removed or the ID is invalid.`} 
           onRetry={handleRetry} 
           onDisconnect={onDisconnect}
         />
       </div>
     );
  }

  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
      <div className="mb-6 flex items-center">
        <button 
          onClick={onDisconnect}
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined !text-[18px]">arrow_back</span>
          Back
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-10 h-auto">
        <div className="xl:col-span-1">
          <PatientCard patient={normalizedPatient} />
        </div>
        
        <div className="xl:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatsCard 
            title="Total Observations" 
            value={normalizedObservations.length} 
            subtitle="Records" 
            icon="database" 
            colorClass="text-secondary" 
          />
          <StatsCard 
            title="Unique Metrics" 
            value={uniqueCodes} 
            subtitle="Health Types" 
            icon="analytics" 
            colorClass="text-tertiary" 
          />
          <StatsCard 
            title="FHIR Version" 
            value="R4" 
            subtitle="API Status" 
            icon="hub" 
            colorClass="text-primary" 
          />
        </div>
      </div>

      <ObservationList observations={normalizedObservations} />
      
      <PatientInfo patient={normalizedPatient} />
    </div>
  );
};

export default DashboardPage;
