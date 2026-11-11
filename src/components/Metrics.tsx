import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ClientMetric } from "../data/site";

function AnimatedNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1000;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return <span ref={ref}>+{count.toLocaleString()}</span>;
}

export default function Metrics({ metrics }: { metrics: ClientMetric[] }) {
  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 px-5">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <p className="text-2xl md:text-3xl font-bold text-purple-700">
            <AnimatedNumber target={metric.value} />
          </p>
          <p className="text-gray-600">{metric.label}</p>
          <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
        </motion.div>
      ))}
    </div>
  );
}
