import React, { useMemo } from 'react';

const MiniChart = ({ value, label }) => {
  // Generate stable random data for the sparkline based on the label and value
  const data = useMemo(() => {
    let seed = 0;
    const str = label + value;
    for (let i = 0; i < str.length; i++) {
        seed = str.charCodeAt(i) + ((seed << 5) - seed);
    }
    
    const numBars = 12;
    const bars = [];
    let currentVal = typeof value === 'number' ? value : 50;
    
    // Create a realistic looking trend leading up to the current value
    for (let i = 0; i < numBars - 1; i++) {
      // random number between -0.15 and 0.15
      const randomPhase = Math.sin(seed + i) * 0.15; 
      const previousValue = currentVal * (1 - randomPhase);
      bars.push(Math.max(10, previousValue));
    }
    bars.push(currentVal); // Ensure the last bar is proportional to current value
    
    // Normalize heights between 20% and 100%
    const max = Math.max(...bars);
    const min = Math.min(...bars);
    
    return bars.map(b => {
      const percentage = max === min ? 50 : ((b - min) / (max - min)) * 80 + 20;
      return percentage;
    });
  }, [value, label]);

  return (
    <div className="flex items-end gap-1 h-10 w-full mb-3 mt-1">
      {data.map((height, i) => (
        <div 
          key={i}
          className={`w-full rounded-t-sm transition-all duration-500 ease-in-out ${i === data.length - 1 ? 'bg-primary' : 'bg-primary/20 hover:bg-primary/40'}`}
          style={{ height: `${height}%` }}
        ></div>
      ))}
    </div>
  );
};

export default MiniChart;
