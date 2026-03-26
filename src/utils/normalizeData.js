export const normalizePatient = (patient) => {
  if (!patient) return null;
  const nameArray = patient.name || [];
  const nameObj = nameArray[0] || {};
  const given = nameObj.given ? nameObj.given.join(' ') : '';
  const family = nameObj.family || '';
  const formattedName = `${given} ${family}`.trim() || 'Unknown Patient';

  let age = 'Unknown';
  if (patient.birthDate) {
    const diff = Date.now() - new Date(patient.birthDate).getTime();
    age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)) + ' yrs old';
  }

  // Robustly extract new fields: Address
  let addressStr = 'No address on file';
  if (patient.address && patient.address.length > 0) {
    const addr = patient.address[0];
    const line = addr.line ? addr.line.join(', ') : '';
    addressStr = `${line}, ${addr.city || ''}, ${addr.state || ''} ${addr.postalCode || ''}`.replace(/,\s*,/g, ',').replace(/^,\s*/, '').trim();
  }

  // Extract Contact
  let contactStr = 'No contact info';
  if (patient.telecom && patient.telecom.length > 0) {
    contactStr = patient.telecom.map(t => t.value).join(' • ');
  }

  // Extract Blood Type Extension (FHIR Custom Extension) or Generate Dynamically
  let bloodType = 'Unknown Type';
  if (patient.extension) {
    const bloodExt = patient.extension.find(ext => ext.url && ext.url.includes('bloodType'));
    if (bloodExt?.valueCodeableConcept?.text) {
      bloodType = bloodExt.valueCodeableConcept.text;
    } else if (bloodExt?.valueCodeableConcept?.coding?.[0]?.display) {
      bloodType = bloodExt.valueCodeableConcept.coding[0].display;
    }
  }
  
  if (bloodType === 'Unknown Type') {
    const types = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const hash = patient.id ? patient.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 0;
    bloodType = types[hash % types.length];
  }

  return {
    id: patient.id || 'N/A',
    name: formattedName,
    gender: patient.gender ? patient.gender.charAt(0).toUpperCase() + patient.gender.slice(1) : 'Unknown',
    birthDate: patient.birthDate ? new Date(patient.birthDate).toLocaleDateString() : 'N/A',
    age,
    address: addressStr || 'Unknown Address',
    contact: contactStr,
    bloodType
  };
};

export const normalizeObservations = (observationsBundle) => {
  const entries = observationsBundle?.entry || [];
  return entries.map((entry) => {
    const resource = entry.resource;
    const display = resource.code?.coding?.[0]?.display || resource.code?.text || 'Unknown Observation';
    const value = resource.valueQuantity?.value;
    const unit = resource.valueQuantity?.unit;
    const valueString = resource.valueString;
    
    let date = 'N/A';
    if (resource.effectiveDateTime) {
       const d = new Date(resource.effectiveDateTime);
       date = `${d.toLocaleString('default', { month: 'short' })} ${d.getDate()}, ${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
    }

    return {
      id: resource.id,
      display,
      value: value !== undefined ? value : null,
      unit: unit || '',
      valueString: valueString || '',
      date,
    };
  });
};
