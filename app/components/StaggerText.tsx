import React from "react";
import { motion } from "motion/react";
export default function StaggerText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {children.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 * i }}
          >
            {word}
          </motion.span>
          {i < children.split(" ").length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
}
