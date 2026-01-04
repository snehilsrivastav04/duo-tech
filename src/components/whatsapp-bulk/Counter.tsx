import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const target = 100;
      const duration = 2;
      const increment = target / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <span ref={ref}>
      {new Intl.NumberFormat().format(count)}
    </span>
  );
};

export default Counter;