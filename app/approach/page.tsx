"use client"
import React from 'react'
import NavBar from '../components/NavBar';
import StaggerText from '../components/StaggerText';
import Image from 'next/image';
import Foot from '../components/Foot';
import { motion } from 'motion/react'
import Button from '../components/Button';

const Intelligence = [
  { standard: "Trangulation", label: "Every assessment draws on all three streams", description: "Where sources align, we have confidence. Where they diverge, we investigate further." },
  { standard: "Verification Standards", label: "Single-source intelligence flagged as preliminary", description: "We distinguish between confirmed, likely, possible and unverified." },
  { standard: "Analytical Rigour", label: "Fact separated from interpretation", description: "Reports detail what happened, what it likely means, and what remains uncertain." },
  { standard: "Timelines", label: "Breaking developments trigger immediate alerts", description: "Weekly summaries track evolving situations. Quarterly assessments provide the big picture. " },
]

const ThreePillars = [
  {
    label: "Media Intelligence",
    description: "Systematic monitoring and analysis of political developments, policy shifts and regulatory changes across West African markets.",
    items: ["Daily tracking of national and regional news", "Translation of local-language coverage missed globally", "Early warning on political transitions and regulatory shifts"]
  },
  {
    label: "Expert Networks",
    description: "Direct engagement with on-the-ground specialists, sector leaders and policy practitioners who shape developments in real time.",
    items: ["Off-the-record briefings and consultations", "Access to unpublished research", "Ground-truth verification of official statements"]
  },
  {
    label: "Government Access",
    description: "Embedded relationships within government structures and local correspondent networks providing direct intelligence from decision-making centres.",
    items: ["Confidential consultations across ministries", "Local correspondents across 6 countries", "Advanced notice before public announcements"]
  },
]
export default function Approach() {


  return (
    <>
      <NavBar />
      <section className="min-h-max w-full overflow-x-hidden border-b-1 border-white/10 pb-12">
        <div className="mx-auto min-h-max w-9/10 pt-12">
          {/* Hero Grid */}
          <div className="grid-cols-12 overflow-x-hidden md:flex md:flex-col md:gap-8 lg:grid">
            <div className="col-start-1 col-end-13 flex min-h-max flex-col justify-between gap-12 md:gap-8 lg:gap-24">
              {/* Hero headings and subheading */}
              <div className="flex flex-col gap-4">
                <span className="text-primary font-medium">
                  <StaggerText>Our Approach</StaggerText>
                </span>
                <h1 className="tracking-xtra text-lg leading-[100%] font-bold md:text-xl lg:text-3xl">
                  <StaggerText>
                    We don't supplement AI. We provide what AI cannot.
                  </StaggerText>
                </h1>
              </div>
              {/* Hero paragraphs */}
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <p className="leading-reg max-w-[30ch] lg:max-w-[45ch]">
                  <StaggerText>
                    West Africa's political landscape cannot be understood through data alone. This is where algorithms fail and human intelligence prevails.
                  </StaggerText>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What we do */}
      <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
        <div className="mx-auto min-h-max w-9/10">
          <div className="flex w-full flex-col justify-between md:flex-row">
            <h2 className="tracking-xtra leading-tight text-[2rem] font-bold md:w-1/2 md:text-xl mb-4">
              <StaggerText>Intelligence built on relationships, not algorithms</StaggerText>
            </h2>
            <p className="md:text-md leading-reg text-base text-white/70 md:w-1/2 md:max-w-[45ch] lg:max-w-[40ch]">
              West Africa's political landscape cannot be understood through data alone. AI can process documents. Algorithms can track trends. But Africa's data deficit makes automated analysis fundamentally inadequate.
              <br></br><br></br>
              Critical insights live in informal networks, unwritten agreements and oral communication channels no algorithm can access. Political decisions are shaped in ministerial offices, community forums and private conversations that leave no digital footprint.
              <br></br><br></br>
              This is where AI fails and human intelligence prevails.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars of Intelligence */}
      <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
        <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-8 md:gap-32">
          <div className="flex w-full grid-cols-2 flex-col justify-between gap-4 md:flex-row lg:grid">
            <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
              <StaggerText>Three Pillars Of Intelligence</StaggerText>
            </h2>
            <p className="leading-reg text-base text-white/70 md:w-full md:max-w-[45ch] lg:max-w-[50ch]">
              Every assessment draws on all three streams, triangulated, verified, and delivered with rigour.
            </p>
          </div>
          <div className="no-scrollbar flex flex-wrap gap-8 overflow-x-auto border-white/10 py-4 md:flex-nowrap lg:flex-row lg:justify-center">
            {ThreePillars.map((model, i) => (
              <div
                key={i}
                className={`border-primary flex min-h-[550px]  min-w-[100%] flex-col gap-8 rounded-4xl border px-8 py-12 md:min-w-[60%] lg:w-[363px] lg:min-w-0`}
              >
                <span className='text-smd  font-bold px-4'>{i + 1}</span>
                <div className="flex flex-col gap-8 px-4 border-b-1 border-white/10  pb-4">
                  <h3 className="text-md font-bold">{model.label}</h3>
                  <p className="max-w-[35ch] text-white/75 lg:max-w-full">{model.description}`</p>
                </div>
                <div className="flex flex-col px-4">
                  {model.items.map((feature: string, j: number) => (
                    <span key={j} className="flex flex-row py-2 text-white/50">
                      <span className='text-primary text-smd font-bold pr-4'>&bull;</span> {feature}
                    </span>
                  ))}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synthesise Intelligence */}
      <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
        <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-8 md:gap-8">
          <h2 className="tracking-xtra text-lg font-bold md:text-xl">
            <StaggerText>Project Packages</StaggerText>
          </h2>
          <motion.div
            initial="initial"
            viewport={{ once: true, root: undefined }}
            whileInView="inView"
            className="grid-cols-2 divide-x divide-y divide-white/[0.04] md:grid"
          >
            {Intelligence.map((standard: any, i: any) => (
              <motion.div
                key={i}
                className="bg-background px-4 py-12 duration-200 md:px-12 md:py-24"
                variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                transition={{ delay: i * 0.25, ease: "easeInOut" }}
              >
                <h3 className="text-md text-primary font-bold mb-1">{standard.standard}</h3>
                <h4 className="text-md font-bold tracking-tight mb-4">{standard.label}</h4>
                <p className="max-w-[40ch] leading-relaxed text-white/50">{standard.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
