import React from 'react';
import { useCountdown } from './useCountdown';

const CountdownTimer = ({ targetDate }) => {
  const [h, m, s] = useCountdown();

  return (
    <div style={{width:"100%"}}>
      <h2 style={{fontSize: "32px", margin:0}}>{String(h).padStart(2, '0')}:{String(m).padStart(2, '0')}:{String(s).padStart(2, '0')}</h2>
    </div>
  );
};

export default CountdownTimer;
