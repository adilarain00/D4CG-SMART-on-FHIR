import { mockPatients, mockObservations } from './mockData';

// Simulated Network Latency to ensure loaders are visualized cleanly
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPatient = async (patientId) => {
  if (!patientId) throw new Error('Patient ID is required');
  
  // Real-world emulation delay (800ms - 1300ms)
  await delay(800 + Math.random() * 500); 

  const data = mockPatients[patientId];
  if (!data) {
    const error = new Error(`Request failed with status code 404`);
    error.status = 404;
    throw error;
  }
  return data;
};

export const fetchObservations = async (patientId) => {
  if (!patientId) throw new Error('Patient ID is required');
  
  // Network simulation (slightly heavier for bundles)
  await delay(1000 + Math.random() * 600); 

  const data = mockObservations[patientId];
  if (!data) {
    // Standard FHIR returns empty Bundle arrays, not 404s for observations
    return { resourceType: "Bundle", entry: [] };
  }
  return data;
};
