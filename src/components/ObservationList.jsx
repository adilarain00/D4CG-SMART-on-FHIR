import React, { useMemo } from 'react';
import ObservationCard from './ObservationCard';

const PREFERRED_OBSERVATIONS = [
  'heart rate',
  'blood pressure',
  'temperature',
  'body temperature',
  'oxygen saturation',
  'respiratory rate',
  'body weight',
  'weight'
];

const ObservationList = ({ observations }) => {
  const topObservations = useMemo(() => {
    if (!observations || observations.length === 0) return [];
    
    // Sort logic to prefer specific vitals
    const scored = observations.map(obs => {
      const matchIndex = PREFERRED_OBSERVATIONS.findIndex(pref => 
        obs.display.toLowerCase().includes(pref)
      );
      return {
        ...obs,
        score: matchIndex !== -1 ? (100 - matchIndex) : 0
      };
    });
    
    // Sort highest score first, then fallback to most recent (if we had real dates), here we just sort by score.
    scored.sort((a, b) => b.score - a.score);
    
    return scored.slice(0, 6);
  }, [observations]);

  if (!topObservations || topObservations.length === 0) return null;

  return (
    <section className="space-y-6 mt-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-on-surface px-4 border-l-4 border-primary font-headline">Clinical Observations</h3>
        <span className="text-sm text-on-surface-variant font-medium px-4 py-1.5 bg-surface-container-high rounded-full">{topObservations.length} Visible</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {topObservations.map((obs, idx) => {
          const isSecondary = idx % 2 === 0;
          return <ObservationCard key={obs.id || idx} obs={obs} isSecondary={isSecondary} />;
        })}
      </div>
    </section>
  );
};

export default ObservationList;
