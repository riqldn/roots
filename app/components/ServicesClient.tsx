"use client"
import React from "react"
import NavBar from "../components/NavBar"
import Foot from "../components/Foot"
import StaggerText from "../components/StaggerText"
import TierButton from "./TierButton"
import ServiceSection from "./ServiceSection"
import { motion } from "motion/react"
import Button from "./Button"

const ProjectPackages = [
    { tier: "Policy", pack: "Policy Research & Landscape Pack", description: "One major sector report, 1 hour debrief, regulatory mapping and competitor benchmarking " },
    { tier: "Risk", pack: "Pre-Crisis Management Pack", description: "Risk forecasting, stakeholder matrix, crisis triggers and full response playbook" },
    { tier: "Startup", pack: "Startup Governance Starter Pack", description: "Policy essentials, governance checklist, compliance overview and 30-day action plan" },
    { tier: "Monitoring", pack: "Quarterly Policy Monitoring ", description: "3 briefing reports, full quarter political tracking, strategy session and early-warning risk briefing " },
]

const StrategicArray = [
    {
        label: "Narrative & Positioning Strategy",
        description:
            "Policy-aligned messaging frameworks that establish credibility with governments and partners.",
    },
    {
        label: "Media, Articles & Thought Leadership",
        description:
            "Researching, drafting and refining high-level articles and opinion pieces for senior executives.",
    },
    {
        label: "Executive Visibility & LinkedIn Strategy",
        description:
            "Structured thought-leadership support — LinkedIn positioning and policy-informed commentary.",
    },
    {
        label: "Issues & Reputation Management",
        description:
            "Proactive monitoring of political and media narratives with strategic response frameworks.",
    },
    {
        label: "Public Affairs Campaigns",
        description:
            "Targeted communication strategies during regulatory shifts, licensing or policy reform periods.",
    },
];

const PolicyArray = [
    {
        label: "Policy Research & Analysis",
        description:
            "In-depth reports on legislation, government policy, political climate and market conditions.",
    },
    {
        label: "Political & Industry Landscape Mapping",
        description:
            "Strategic mapping of sector frameworks, regulatory regimes and the stakeholders who hold influence.",
    },
    {
        label: "Political & Regulatory Risk Analysis",
        description:
            "Clear evaluation of political stability, compliance exposure, regulatory shifts and potential disruptions.",
    },
    {
        label: "Pre-Crisis Management Reports",
        description:
            "Forward-looking assessments to anticipate emerging risks and prepare mitigation strategies.",
    },
    {
        label: "Stakeholder Mapping & Engagement Strategy",
        description:
            "Identification of key government actors, influencers and regulators — including their motivations.",
    },
    {
        label: "Advisory Support for Market Entry",
        description:
            "Strategic guidance for companies entering sensitive, regulated or emerging sectors.",
    },
];

const CampaignArray = [
    {
        label: "Campaign Strategy & Messaging",
        description:
            "The core message, narrative and positioning your entire campaign is built on",
    },
    {
        label: "Voter & Stakeholder Communications",
        description:
            "Communications that reach and move the people who matter most to your campaign's success.",
    },
    {
        label: "Digital Campaign Content & Social Strategy",
        description:
            "The digital framework that keeps your campaign visible and compelling across every platform.",
    },
    {
        label: "Opposition & Landscape Research",
        description:
            "Competitive intelligence that enables your campaign to anticipate rather than react.",
    },
    {
        label: "Campaign Press & Media Management",
        description:
            "Proactive story placement, media handling and narrative protection throughout the campaign.",
    },
    {
        label: "GOTV Strategy",
        description:
            "The mobilisation strategy that turns committed support into votes cast on polling day.",
    },
];

const GovernmentArray = [
    {
        label: "Investor Attraction & FDI Framework Advisory",
        description:
            "Help ministries build structures and narratives that attract serious foreign investment on fair terms.",
    },
    {
        label: "Bilateral Relations & Diplomatic Positioning",
        description:
            "Strategic support for governments building relationships with the UK, EU and Gulf.",
    },
    {
        label: "Diaspora Diplomacy & Engagement Strategy",
        description:
            "Help governments formalise their diaspora as a foreign policy and economic asset.",
    },
    {
        label: "National Strategy & Development Plan Advisory",
        description:
            "Work with ministries to build credible, investor-ready national development plans.",
    },
    {
        label: "Minister Reputation & Profile Management",
        description:
            "Protect and build the personal reputation of ministers with domestic and international audiences.",
    },
    {
        label: "Parliamentary & International Forum Preparation",
        description:
            "Prepare ministers and officials for high-profile international events with clear messaging.",
    },
];

const services = [
    {
        id: "strategic",
        label: "Strategic Comms & Public Affairs",
        tagline: "Your narrative, positioned with political intelligence behind it.",
        description: "We work with organisations where understanding West Africa's political landscape is not optional — it's the difference between success and exposure.",
        items: StrategicArray,
    },
    {
        id: "policy",
        label: "Policy Advisory",
        tagline: "Intelligence and analysis that puts you ahead of the political and regulatory forces shaping your operations.",
        description: "From deep policy research to pre-crisis risk assessment — we give you the clarity to act before events unfold, not after.",
        items: PolicyArray,
    },
    {
        id: "campaign",
        label: "Campaign Management",
        tagline: "Strategy and intelligence built to win.",
        description: "From core message to GOTV — we build the political, communications and digital infrastructure that turns campaigning into votes.",
        items: CampaignArray,
    },
    {
        id: "government",
        label: "Government Advisory",
        tagline: "We work for governments — not for the investors or companies seeking access to them.",
        description: "We help governments build the structures, narrative and international positioning they need to attract serious investment on fair terms.",
        items: GovernmentArray,
    },
]

export default function ServicesClient({ engagementModels }: { engagementModels: any[] }) {
    return (
        <>
            <NavBar />

            {/* Hero */}
            <section className="min-h-max w-full overflow-x-hidden border-b-1 border-white/10 pb-12">
                <div className="mx-auto min-h-max w-9/10 pt-12">
                    <div className="grid-cols-12 overflow-x-hidden md:flex md:flex-col md:gap-8 lg:grid">
                        <div className="col-start-1 col-end-13 flex min-h-max flex-col justify-between gap-12 md:gap-8 lg:gap-24">
                            <div className="flex flex-col gap-4">
                                <span className="text-primary font-medium">
                                    <StaggerText>Services</StaggerText>
                                </span>
                                <h1 className="tracking-xtra text-lg leading-[100%] font-bold md:text-xl lg:text-3xl">
                                    <StaggerText>
                                        Political intelligence that turns opacity into opportunity.
                                    </StaggerText>
                                </h1>
                            </div>
                            <div className="flex flex-col justify-between gap-4 md:flex-row">
                                <p className="leading-reg max-w-[30ch] lg:max-w-[45ch]">
                                    <StaggerText>
                                        We deliver clarity across four service lines — combining deep advisory expertise, rigorous research and strategic foresight to help you navigate the political, regulatory and sector-specific forces shaping West Africa.
                                    </StaggerText>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service lines — one map replaces four identical sections */}
            {services.map((service) => (
                <ServiceSection
                    key={service.id}
                    label={service.label}
                    tagline={service.tagline}
                    description={service.description}
                    items={service.items}
                />
            ))}

            {/* Engagement Models */}
            <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
                <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-8 md:gap-32">
                    <div className="flex w-full grid-cols-2 flex-col justify-between gap-4 md:flex-row lg:grid">
                        <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                            <StaggerText>Engagement Models</StaggerText>
                        </h2>
                        <p className="leading-reg text-base text-white/70 md:w-full md:max-w-[45ch] lg:max-w-[50ch]">
                            We work with clients across four flexible models, from ongoing strategic partnerships to focused project engagements.
                        </p>
                    </div>
                    <div className="no-scrollbar flex flex-wrap gap-8 overflow-x-auto border-white/10 py-4 md:flex-nowrap lg:flex-row lg:justify-center">
                        {engagementModels.map((model, i) => (
                            <div
                                key={model.sys.id}
                                className={`border-primary flex min-h-[652px] ${i === 1 ? "bg-primary/40" : ""} min-w-[100%] flex-col gap-8 rounded-4xl border px-4 py-24 md:min-w-[60%] lg:w-[363px] lg:min-w-0`}
                            >
                                <div className="flex flex-col gap-8 px-4">
                                    <h3 className="text-md font-bold">{model.fields.tier}</h3>
                                    <p className="max-w-[35ch] text-white/75 lg:max-w-full">{model.fields.description}</p>
                                </div>
                                <div className="flex flex-col px-4">
                                    {model.fields.features.map((feature: string, j: number) => (
                                        <span key={j} className="border-b-1 border-white/10 py-2 text-white/50">
                                            {feature}
                                        </span>
                                    ))}
                                    <span className="mt-8">
                                        <TierButton isLight={i === 1 ? false : true} cta="Get Started" href="/contact" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Packages */}
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
                        {ProjectPackages.map((pack: any, i: any) => (
                            <motion.div
                                key={pack.pack}
                                className="bg-background px-4 py-12 duration-200 md:px-4 md:py-24"
                                variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                                transition={{ delay: i * 0.25, ease: "easeInOut" }}
                            >
                                <h3 className="text-md text-primary font-bold mb-1">{pack.tier}</h3>
                                <h4 className="text-md font-bold tracking-tight mb-4">{pack.pack}</h4>
                                <p className="max-w-[40ch] leading-relaxed text-white/50">{pack.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
                <div className="mx-auto min-h-max w-9/10">
                    <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
                        <div className="flex w-full flex-col justify-between md:w-[60%]">
                            <h2 className="tracking-xtra text-xl leading-tight font-bold md:text-3xl">
                                <StaggerText>Ready to navigate with confidence?</StaggerText>
                            </h2>
                            <p className="leading-reg max-w-[25ch] text-base text-white/70 md:max-w-[45ch] lg:max-w-[50ch]">
                                Get in touch and tell us what you're working on.
                            </p>
                        </div>
                        <div className="self-start md:self-center">
                            <Button href="/contact" isLight={true} cta="Get in touch" />
                            <span className="text-sm text-white/50">info@riserootsgroup.com</span>
                        </div>
                    </div>
                </div>
            </section>

            <Foot />
        </>
    )
}