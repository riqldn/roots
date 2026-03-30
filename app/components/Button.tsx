import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Button({
  isLight,
  cta,
  href,
}: {
  isLight: boolean;
  cta: string;
  href: string;
}) {
  const ARROW_PATH =
    "M11.8768 0.946282C11.8472 0.394793 11.3761 -0.0282566 10.8246 0.00137466L1.83759 0.484244C1.2861 0.513876 0.863053 0.984967 0.892684 1.53646C0.922315 2.08795 1.39341 2.51099 1.9449 2.48136L9.93337 2.05215L10.3626 10.0406C10.3922 10.5921 10.8633 11.0152 11.4148 10.9855C11.9663 10.9559 12.3893 10.4848 12.3597 9.93332L11.8768 0.946282ZM1.74403 12.6682L11.6223 1.66808L10.1343 0.331784L0.255974 11.3318L1.74403 12.6682Z";
  return (
    <motion.div
      className="w-max"
      initial="initial"
      whileHover="hovered"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Link
        className={
          isLight
            ? "bg-primary flex flex-row items-center justify-center gap-2 rounded-md px-4 py-2 font-medium text-white"
            : "bg-background flex flex-row items-center justify-center gap-2 rounded-md border-1 px-4 py-2 font-medium text-white"
        }
        href={href}
      >
        <span>{cta}</span>
        <div className="bg-secondary flex overflow-hidden">
          <span className="relative flex h-[13px] w-[13px] overflow-hidden">
            {[
              { initial: { y: 0 }, hovered: { y: -20 } },
              { initial: { y: 20 }, hovered: { y: 0 } },
            ].map((variants, i) => (
              <motion.svg
                key={i}
                variants={variants}
                className="absolute"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path d={ARROW_PATH} fill="white" />
              </motion.svg>
            ))}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
