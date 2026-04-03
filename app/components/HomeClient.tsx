// app/components/HomeClient.tsx
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import StaggerText from "./StaggerText";
import WestAfricaMap from "./WestAfricaMap";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import Foot from "./Foot";
import Link from "next/link";

export default function HomeClient({
  sectors,
  works,
  countries,
}: {
  sectors: any[];
  works: any[];
  countries: any[];
}) {
  console.log(sectors);
  const audiences = [
    {
      num: "01",
      title: "Investors",
      desc: "Entering or expanding in West African markets.",
    },
    {
      num: "02",
      title: "Corporates",
      desc: "Natural resources, technology and infrastructure sectors.",
    },
    {
      num: "03",
      title: "Governments",
      desc: "Building international positioning and investor attraction.",
    },
    {
      num: "04",
      title: "Organisations",
      desc: "Requiring political and regulatory due diligence.",
    },
  ];

  const reasons = [
    {
      icon: "/target.svg",
      title: "Proximity",
      desc: "Our intelligence comes from Freetown, Dakar, Conakry, Bamako, Abidjan and Accra. Not London or Washington.",
    },
    {
      icon: "/users.svg",
      title: "Relationships",
      desc: "We maintain networks built over years. Trust enables candour. Continuity enables depth that algorithms cannot replicate.",
    },
    {
      icon: "/binoculars.svg",
      title: "Foresights",
      desc: "Our clients don't hire us to explain yesterday. They hire us to anticipate tomorrow. That is the only metric that matters.",
    },
  ];

  const CountUp = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "0px 0px -90px 0px",
    });

    useEffect(() => {
      if (!isInView) return;
      let start = 1;
      const duration = 500;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{count}</span>;
  };

  return (
    <>
      <section className="min-h-screen w-full overflow-x-hidden pb-12">
        <div className="mx-auto min-h-screen w-9/10 pt-12">
          <div className="grid-cols-12 overflow-x-hidden md:flex md:flex-col md:gap-8 lg:grid">
            <div className="col-start-1 col-end-8 flex min-h-max flex-col justify-between gap-12 md:gap-4 lg:gap-32">
              <div className="flex flex-col gap-4">
                <span className="text-primary font-medium">
                  <StaggerText>
                    Political Intelligence &#183; West Africa
                  </StaggerText>
                </span>
                <h1 className="tracking-xtra leading-xtra text-lg font-bold md:text-3xl lg:text-3xl">
                  <StaggerText>
                    West Africa Is At An Inflection Point
                  </StaggerText>
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <p className="leading-reg max-w-[28ch] lg:max-w-[45ch]">
                  <StaggerText>
                    A specialist political-risk and policy-analysis consultancy
                    delivering actionable intelligence across West Africa&apos;s
                    most complex markets.
                  </StaggerText>
                </p>
                <div className="flex flex-row gap-4">
                  <Button href="/contact" isLight={true} cta="Get in touch" />
                  <Button href="/services" isLight={false} cta="Our services" />
                </div>
              </div>
            </div>
            <div className="col-start-8 col-end-12">
              <WestAfricaMap className="w-full lg:w-[496px]" />
            </div>
            <div className="col-start-7 col-end-13 flex flex-row justify-around rounded-2xl bg-white/3 py-12">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">
                  <CountUp target={6} />
                </span>
                <span className="text-white/50">countries</span>
              </div>
              <span className="flex flex-col items-center">
                <span className="text-3xl font-bold">
                  <CountUp target={4} />
                </span>
                <span className="text-white/50">service lines</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
        <div className="mx-auto min-h-max w-9/10">
          <div className="flex w-full flex-col justify-between md:flex-row">
            <h2 className="tracking-xtra text-[2rem] font-bold md:w-1/2 md:text-xl">
              <StaggerText>What we do</StaggerText>
            </h2>
            <p className="md:text-md leading-reg text-base text-white/70 md:w-1/2 md:max-w-[45ch] lg:max-w-[50ch]">
              Roots Policy Consulting is a political intelligence company
              specialising in West Africa. We give investors, corporates and
              governments the insight they need to navigate complex geopolitics,
              and turn that understanding into confident decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
        <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-32">
          <div className="flex w-full flex-col justify-between md:flex-row">
            <h2 className="tracking-xtra text-[2rem] font-bold md:w-1/2 md:text-xl">
              <StaggerText>Who we serve</StaggerText>
            </h2>
            <p className="leading-reg text-base text-white/70 md:w-1/2 md:max-w-[45ch] lg:max-w-[50ch]">
              We work with organisations where understanding West Africa's
              political landscape is not optional — it&apos;s the difference
              between success and exposure.
            </p>
          </div>
          <motion.div
            initial="initial"
            viewport={{ once: true, amount: "some", root: undefined }}
            whileInView="inView"
            className="grid-cols-2 divide-x divide-white/[0.04] md:grid md:divide-y"
          >
            {audiences.map((item, i) => (
              <motion.div
                key={item.num}
                className="bg-background group py-12 transition-colors duration-200 hover:bg-[#0f0f14] md:px-12"
                variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                transition={{ delay: i * 0.25, ease: "easeInOut" }}
              >
                <p className="mb-3 text-[12px] text-white/70 tabular-nums">
                  {item.num}
                </p>
                <h3 className="text-md mb-2 font-medium transition-colors duration-200 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
        <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-12 md:gap-32">
          <div className="flex w-full flex-col justify-between md:flex-row">
            <h2 className="tracking-xtra text-lg font-bold md:w-1/2 md:text-xl">
              <StaggerText>Why us</StaggerText>
            </h2>
            <p className="leading-reg text-base text-white/70 md:w-1/2 md:max-w-[45ch] lg:max-w-[50ch]">
              Three things that separate our intelligence from every other firm
              claiming to understand the region.
            </p>
          </div>
          <motion.div
            initial="initial"
            viewport={{ once: true }}
            whileInView="inView"
            className="grid-cols-3 divide-x divide-y divide-white/[0.04] md:grid"
          >
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                className="bg-background px-4 py-12 duration-200 md:px-4 md:py-24 lg:px-12"
                variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                transition={{ delay: i * 0.25, ease: "easeInOut" }}
              >
                <Image
                  className="pb-12"
                  alt="icon"
                  src={item.icon}
                  height={60}
                  width={60}
                />
                <h3 className="text-md mb-2 font-medium">{item.title}</h3>
                <p className="max-w-[30ch] leading-relaxed text-white/50 md:max-w-[50ch]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Works from Contentful */}
      <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
        <div className="mx-auto min-h-max w-9/10">
          <div className="mb-12 flex w-full flex-col justify-between md:flex-row">
            <h2 className="tracking-xtra text-[2rem] font-bold md:w-1/2 md:text-xl">
              <StaggerText>Featured work</StaggerText>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {works.map((work: any, i) => {
              // console.log('categories:', JSON.stringify(work.fields.category, null, 2))
              const imageUrl = work.fields.thumbnail?.fields?.file?.url
                ? `https:${work.fields.thumbnail.fields.file.url}`
                : null;

              const categories = work.fields.category || [];

              return (
                <Link key={i * 100} href={`portfolio/${work.fields.slug}`}>
                  <div key={i}>
                    <div
                      key={work.sys.id}
                      className="group relative h-[350px] cursor-pointer overflow-hidden rounded-lg"
                    >
                      {/* Background image */}
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={work.fields.title}
                          fill
                          className="aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute top-0 bg-gradient-to-br from-[#1a1420] to-[#2d1f3d]" />
                      )}

                      {/* Dark gradient overlay — stronger at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Content sits on top of overlay */}
                    </div>
                    <div key={work.sys.id * 5} className="relative py-4">
                      {/* Category pills */}
                      {Array.isArray(categories) && categories.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {categories.map((cat: any) => {
                            const label = cat.fields?.category; // ← was cat.fields?.name, should be cat.fields?.category

                            if (!label) return null;

                            return (
                              <span
                                key={cat.sys.id}
                                className="text-primary rounded-xl bg-[#120C36] px-2 py-1 text-[12px]"
                              >
                                {label}
                              </span>
                            );
                          })}
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-[16px] leading-snug font-semibold text-white">
                        {work.fields.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
        <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-12 md:gap-32">
          <div className="flex w-full flex-col justify-between md:flex-row">
            <h2 className="tracking-xtra text-lg font-bold md:w-1/2 md:text-xl">
              <StaggerText>Our Focus</StaggerText>
            </h2>
            <div className="flex w-full flex-col gap-16 md:mt-2 md:w-[60%] lg:mt-0 lg:w-[43%]">
              <div className="flex flex-col items-start gap-8 md:flex-row">
                <span className="text-smd self-start font-bold">Countries</span>
                <div className="mt-2 flex flex-row flex-wrap items-center gap-1 gap-y-2">
                  {countries.map((country: any, i: number) => {
                    return (
                      <span key={i}
                        className={
                          country.fields.highlight
                            ? "text-primary border-primary mr-2 flex max-h-max max-w-max items-center justify-center rounded-3xl border-1 px-3 font-medium text-nowrap"
                            : "mr-1 flex max-h-max max-w-max items-center justify-center rounded-3xl border-1 border-white/50 px-3 font-medium text-nowrap text-white/50"
                        }
                      >
                        {country.fields.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 md:flex-row">
                <span className="text-smd self-start font-bold">Sectors</span>
                <div className="mt-2 flex flex-row flex-wrap items-center gap-1 gap-y-2">
                  {sectors.map((sector: any, i : number) => {
                    return (
                      <span key={i}
                        className={
                          sector.fields.highlight
                            ? "text-primary border-primary mr-2 flex max-h-max max-w-max items-center justify-center rounded-3xl border-1 px-3 font-medium text-nowrap"
                            : "mr-1 flex max-h-max max-w-max items-center justify-center rounded-3xl border-1 border-white/50 px-3 font-medium text-nowrap text-white/50"
                        }
                      >
                        {sector.fields.sector}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta */}
      <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
        <div className="mx-auto min-h-max w-9/10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
            <div className="flex w-full flex-col justify-between md:w-[60%]">
              <h2 className="tracking-xtra text-xl leading-tight font-bold md:text-3xl md:text-xl">
                <StaggerText>Ready to navigate with confidence?</StaggerText>
              </h2>
              <p className="leading-reg max-w-[25ch] text-left text-base text-white/70 md:w-1/2 md:max-w-[45ch] lg:max-w-[50ch]">
                Get in touch and tell us what you&apos;re working on.
              </p>
            </div>

            <div className="self-start md:self-center">
              <Button href="/contact" isLight={true} cta="Get in touch" />
              <span className="text-sm text-white/50">
                info@riserootsgroup.com
              </span>
            </div>
          </div>
        </div>
      </section>

      <Foot />
    </>
  );
}
