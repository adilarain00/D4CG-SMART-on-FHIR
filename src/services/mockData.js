export const mockPatients = {
  "1001": {
    resourceType: "Patient",
    id: "1001",
    name: [{ family: "Thompson", given: ["Alex"] }],
    gender: "other",
    birthDate: "1989-05-12",
    telecom: [{ system: "phone", value: "(555) 123-4567" }, { system: "email", value: "alex.t@example.com" }],
    address: [{ line: ["123 Wellness Ave"], city: "Seattle", state: "WA", postalCode: "98101" }],
    extension: [{ url: "http://hl7.org/fhir/StructureDefinition/patient-bloodType", valueCodeableConcept: { text: "O+" } }]
  },
  "1002": {
    resourceType: "Patient",
    id: "1002",
    name: [{ family: "Garcia", given: ["Maria"] }],
    gender: "female",
    birthDate: "1975-08-22",
    telecom: [{ system: "phone", value: "(555) 987-6543" }],
    address: [{ line: ["456 Health Blvd, Apt 4B"], city: "Austin", state: "TX", postalCode: "78701" }],
    extension: [{ url: "http://hl7.org/fhir/StructureDefinition/patient-bloodType", valueCodeableConcept: { text: "A-" } }]
  },
  "1003": {
    resourceType: "Patient",
    id: "1003",
    name: [{ family: "Wilson", given: ["James"] }],
    gender: "male",
    birthDate: "1952-11-03",
    telecom: [{ system: "email", value: "j.wilson@demo.com" }],
    address: [{ line: ["789 Recovery Road"], city: "Boston", state: "MA", postalCode: "02108" }],
    extension: [{ url: "http://hl7.org/fhir/StructureDefinition/patient-bloodType", valueCodeableConcept: { coding: [{ display: "B+" }] } }]
  }
};

export const mockObservations = {
  "1001": {
    resourceType: "Bundle",
    entry: [
      { resource: { resourceType: "Observation", id: "o1", code: { text: "Heart Rate" }, valueQuantity: { value: 72, unit: "bpm" }, effectiveDateTime: "2023-10-24T09:12:00Z" } },
      { resource: { resourceType: "Observation", id: "o2", code: { text: "Blood Pressure" }, valueString: "118/76", effectiveDateTime: "2023-10-24T09:15:00Z" } },
      { resource: { resourceType: "Observation", id: "o3", code: { text: "Body Temperature" }, valueQuantity: { value: 98.6, unit: "°F" }, effectiveDateTime: "2023-10-24T09:10:00Z" } },
      { resource: { resourceType: "Observation", id: "o4", code: { text: "Respiratory Rate" }, valueQuantity: { value: 16, unit: "breaths/min" }, effectiveDateTime: "2023-10-24T09:13:00Z" } },
      { resource: { resourceType: "Observation", id: "o5", code: { text: "SpO2" }, valueQuantity: { value: 99, unit: "%" }, effectiveDateTime: "2023-10-24T09:11:00Z" } },
      { resource: { resourceType: "Observation", id: "o6", code: { coding: [{ display: "Hemoglobin A1c" }] }, valueQuantity: { value: 5.4, unit: "%" }, effectiveDateTime: "2023-09-15T08:00:00Z" } },
      { resource: { resourceType: "Observation", id: "o7", code: { coding: [{ display: "LDL Cholesterol" }] }, valueQuantity: { value: 95, unit: "mg/dL" }, effectiveDateTime: "2023-09-15T08:05:00Z" } }
    ]
  },
  "1002": {
    resourceType: "Bundle",
    entry: [
      { resource: { resourceType: "Observation", id: "o1", code: { text: "Heart Rate" }, valueQuantity: { value: 88, unit: "bpm" }, effectiveDateTime: new Date().toISOString() } },
      { resource: { resourceType: "Observation", id: "o2", code: { text: "Blood Pressure" }, valueString: "135/85", effectiveDateTime: new Date().toISOString() } },
      { resource: { resourceType: "Observation", id: "o3", code: { text: "Body Temperature" }, valueQuantity: { value: 99.1, unit: "°F" }, effectiveDateTime: new Date().toISOString() } },
      { resource: { resourceType: "Observation", id: "o4", code: { text: "Fasting Glucose" }, valueQuantity: { value: 105, unit: "mg/dL" }, effectiveDateTime: "2023-10-01T07:30:00Z" } },
      { resource: { resourceType: "Observation", id: "o5", code: { text: "SpO2" }, valueQuantity: { value: 99, unit: "%" }, effectiveDateTime: "2023-10-24T09:11:00Z" } },
      { resource: { resourceType: "Observation", id: "o6", code: { coding: [{ display: "Hemoglobin A1c" }] }, valueQuantity: { value: 5.4, unit: "%" }, effectiveDateTime: "2023-09-15T08:00:00Z" } },
    ]
  },
  "1003": {
    resourceType: "Bundle",
    entry: [
      { resource: { resourceType: "Observation", id: "o1", code: { text: "Heart Rate" }, valueQuantity: { value: 65, unit: "bpm" }, effectiveDateTime: new Date().toISOString() } },
      { resource: { resourceType: "Observation", id: "o2", code: { text: "Blood Pressure" }, valueString: "120/80", effectiveDateTime: new Date().toISOString() } },
      { resource: { resourceType: "Observation", id: "o3", code: { text: "Body Temperature" }, valueQuantity: { value: 97.9, unit: "°F" }, effectiveDateTime: new Date().toISOString() } },
      { resource: { resourceType: "Observation", id: "o4", code: { text: "Cholesterol" }, valueQuantity: { value: 180, unit: "mg/dL" }, effectiveDateTime: "2023-05-11T10:00:00Z" } },
      { resource: { resourceType: "Observation", id: "o5", code: { text: "SpO2" }, valueQuantity: { value: 99, unit: "%" }, effectiveDateTime: "2023-10-24T09:11:00Z" } },
      { resource: { resourceType: "Observation", id: "o6", code: { coding: [{ display: "Hemoglobin A1c" }] }, valueQuantity: { value: 5.4, unit: "%" }, effectiveDateTime: "2023-09-15T08:00:00Z" } },
      
    ]
  }
};
