import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Counter = (props) => {
  const { end, suffix, duration } = props;

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <CountUp
        start={0}
        end={inView ? end : 0}
        duration={duration}
        suffix={suffix}
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
    </div>
  );
};

export default Counter;
