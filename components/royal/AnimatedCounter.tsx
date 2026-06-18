"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [duration, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
