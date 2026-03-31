"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const ARROW_PATH =
  "M11.8768 0.946282C11.8472 0.394793 11.3761 -0.0282566 10.8246 0.00137466L1.83759 0.484244C1.2861 0.513876 0.863053 0.984967 0.892684 1.53646C0.922315 2.08795 1.39341 2.51099 1.9449 2.48136L9.93337 2.05215L10.3626 10.0406C10.3922 10.5921 10.8633 11.0152 11.4148 10.9855C11.9663 10.9559 12.3893 10.4848 12.3597 9.93332L11.8768 0.946282ZM1.74403 12.6682L11.6223 1.66808L10.1343 0.331784L0.255974 11.3318L1.74403 12.6682Z";

const StaggerLink = ({ children }: { children: string }) => (
  <motion.div
    className="relative whitespace-nowrap"
    initial="initial"
    whileHover="hovered"
  >
    <motion.div className="overflow-hidden">
      {children.split("").map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          transition={{ delay: 0.01 * i }}
          variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
    <motion.div className="absolute inset-0 overflow-hidden">
      {children.split("").map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          transition={{ delay: 0.01 * i }}
          variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

const ArrowButton = () => (
  <motion.div
    className="hidden lg:block"
    initial="initial"
    whileHover="hovered"
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    <Link
      className="bg-primary flex flex-row items-center justify-center gap-2 rounded-md px-4 py-2 font-medium text-white"
      href="/contact"
    >
      <span>Get in touch</span>
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

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="z-50 flex min-h-10 w-full items-center justify-center">
        <div className="mx-auto flex w-9/10 items-center justify-between">
          <Image src="/logo.svg" alt="Logo" width={100} height={60} priority />

          <div className="hidden items-center gap-4 font-medium lg:flex">
            {NAV_LINKS.slice(0, 6).map(({ label, href }) => (
              <Link key={label} href={href}>
                <StaggerLink>{label}</StaggerLink>
              </Link>
            ))}
          </div>

          <ArrowButton />

          <button
            onClick={() => setIsOpen((o) => !o)}
            className="font-medium lg:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 1 },
              animate: { opacity: 1, transition: { staggerChildren: 0.08 } },
              exit: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                  when: "afterChildren",
                },
              },
            }}
            className="bg-background absolute top-20 left-0 z-40 flex min-h-1/2 w-full flex-col px-6 pt-12"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <motion.div
                key={label}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="tracking-xtra border-y-1 border-white/10 py-2 text-[2rem] font-medium md:text-2xl"
              >
                <Link href={href}>{label}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
