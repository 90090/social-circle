import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children?: ReactNode;
  className?: string;
  /** Starting horizontal offset in px */
  x?: number;
  /** Starting vertical offset in px */
  y?: number;
  delay?: number;
  duration?: number;
  /** true = animate when scrolled into view, false = animate on load */
  onView?: boolean;
}

/**
 * Small framer-motion wrapper so .astro files can animate static content
 * without turning whole sections into React components.
 */
export default function Reveal({
  children,
  className,
  x = 0,
  y = 0,
  delay = 0,
  duration = 0.6,
  onView = true,
}: RevealProps) {
  const target = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      {...(onView
        ? { whileInView: target, viewport: { once: true } }
        : { animate: target })}
      transition={{ duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
