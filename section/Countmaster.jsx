import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUpOnScroll = ({ end, duration, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  return (
    <div ref={ref}>
      <h3 className="timer">
        {inView && (
          <CountUp start={0} end={end} duration={duration} />
        )}
      </h3>
      {label}
    </div>
  );
};

export default CountUpOnScroll;
