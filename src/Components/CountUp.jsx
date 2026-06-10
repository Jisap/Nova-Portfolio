import { useEffect, useState, useRef } from "react";

const CountUp = ({ start = 0, end = 0, duration = 2 }) => {
  const [count, setCount] = useState(start);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let observer;
    let animationFrameId;

    const startAnimation = () => {
      const startTime = performance.now();
      const endValue = Number(end);
      const startValue = Number(start);

      const animate = (currentTime) => {
        const elapsedTime = (currentTime - startTime) / 1000; // in seconds
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          // Ease-out quad formula for smooth decelerating
          const easeOut = progress * (2 - progress);
          const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
          setCount(currentValue);
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [start, end, duration]);

  return <span ref={elementRef}>{count}</span>;
};

export default CountUp;
