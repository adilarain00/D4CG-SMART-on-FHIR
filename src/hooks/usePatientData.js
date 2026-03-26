import { useQuery } from '@tanstack/react-query';
import { fetchPatient, fetchObservations } from '../services/api';

export const usePatientData = (patientId) => {
  const patientQuery = useQuery({
    queryKey: ['patient', patientId],
    queryFn: () => fetchPatient(patientId),
    enabled: !!patientId,
  });

  const observationsQuery = useQuery({
    queryKey: ['observations', patientId],
    queryFn: () => fetchObservations(patientId),
    enabled: !!patientId,
  });

  return {
    patient: patientQuery.data,
    observations: observationsQuery.data,
    isLoading: patientQuery.isLoading || observationsQuery.isLoading,
    isError: patientQuery.isError || observationsQuery.isError,
    error: patientQuery.error || observationsQuery.error,
  };
};
