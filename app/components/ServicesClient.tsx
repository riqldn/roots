"use client";
import React from "react";
import NavBar from "../components/NavBar";
import Foot from "../components/Foot";
import StaggerText from "../components/StaggerText";
import Button from "../components/Button";

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
        label: "Executive Visibility & LinkedIn Strategy",
        description:
            "Structured thought-leadership support — LinkedIn positioning and policy-informed commentary.",
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

export default function ServicesClient({ engagementModels }: { engagementModels: any[] }) {
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
                                    <StaggerText>Services</StaggerText>
                                </span>
                                <h1 className="tracking-xtra text-lg leading-[100%] font-bold md:text-xl lg:text-3xl">
                                    <StaggerText>
                                        Political intelligence that turns opacity into opportunity.
                                    </StaggerText>
                                </h1>
                            </div>
                            {/* Hero paragraphs */}
                            <div className="flex flex-col justify-between gap-4 md:flex-row">
                                <p className="leading-reg max-w-[30ch] lg:max-w-[45ch]">
                                    <StaggerText>
                                        We deliver clarity across four service lines — combining
                                        deep advisory expertise, rigorous research and strategic
                                        foresight to help you navigate the political, regulatory and
                                        sector-specific forces shaping West Africa.
                                    </StaggerText>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
                <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-8 md:gap-32">
                    <div className="flex w-full grid-cols-2 flex-col justify-between gap-4 md:flex-row lg:grid">
                        <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                            <StaggerText>Strategic Comms & Public Affairs</StaggerText>
                        </h2>
                        <div className="flex flex-col gap-4">
                            <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                                <StaggerText>
                                    Your narrative, positioned with political intelligence behind
                                    it.
                                </StaggerText>
                            </h2>
                            <p className="leading-reg text-base text-white/70 md:w-full md:max-w-[45ch] lg:max-w-[50ch]">
                                We work with organisations where understanding West Africa's
                                political landscape is not optional — it&apos;s the difference
                                between success and exposure.
                            </p>
                        </div>
                    </div>
                    <div>
                        {StrategicArray.map((service, i) => (
                            <div
                                key={i}
                                className={`flex grid-cols-2 flex-col items-start gap-4 border-b-1 border-white/10 py-4 last:border-b-0 md:grid md:items-center ${i === 0 ? "" : "border-t-1"}`}
                            >
                                <h3 className="text-md font-bold">{service.label}</h3>
                                <p className="max-w-[35ch] text-white/50 lg:max-w-full">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
                <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-8 md:gap-32">
                    <div className="flex w-full grid-cols-2 flex-col justify-between gap-4 md:flex-row lg:grid">
                        <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                            <StaggerText>Policy Advisory </StaggerText>
                        </h2>
                        <div className="flex flex-col gap-4">
                            <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                                <StaggerText>
                                    Intelligence and analysis that puts you ahead of the political
                                    and regulatory forces shaping your operations.
                                </StaggerText>
                            </h2>
                            <p className="leading-reg text-base text-white/70 md:w-full md:max-w-[45ch] lg:max-w-[50ch]">
                                From deep policy research to pre-crisis risk assessment — we
                                give you the clarity to act before events unfold, not after.
                            </p>
                        </div>
                    </div>
                    <div>
                        {PolicyArray.map((service, i) => (
                            <div
                                key={i}
                                className={`flex grid-cols-2 flex-col items-start gap-4 border-b-1 border-white/10 py-4 last:border-b-0 md:grid md:items-center ${i === 0 ? "" : "border-t-1"}`}
                            >
                                <h3 className="text-md font-bold">{service.label}</h3>
                                <p className="max-w-[35ch] text-white/50 lg:max-w-full">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
                <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-8 md:gap-32">
                    <div className="flex w-full grid-cols-2 flex-col justify-between gap-4 md:flex-row lg:grid">
                        <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                            <StaggerText>Campaign Management</StaggerText>
                        </h2>
                        <div className="flex flex-col gap-4">
                            <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                                <StaggerText>
                                    Strategy and intelligence built to win.
                                </StaggerText>
                            </h2>
                            <p className="leading-reg text-base text-white/70 md:w-full md:max-w-[45ch] lg:max-w-[50ch]">
                                From core message to GOTV — we build the political,
                                communications and digital infrastructure that turns campaigning
                                into votes.
                            </p>
                        </div>
                    </div>
                    <div>
                        {CampaignArray.map((service, i) => (
                            <div
                                key={i}
                                className={`flex grid-cols-2 flex-col items-start gap-4 border-b-1 border-white/10 py-4 last:border-b-0 md:grid md:items-center ${i === 0 ? "" : "border-t-1"}`}
                            >
                                <h3 className="text-md font-bold">{service.label}</h3>
                                <p className="max-w-[35ch] text-white/50 lg:max-w-full">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
                <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-8 md:gap-32">
                    <div className="flex w-full grid-cols-2 flex-col justify-between gap-4 md:flex-row lg:grid">
                        <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                            <StaggerText>Government Advisory</StaggerText>
                        </h2>
                        <div className="flex flex-col gap-4">
                            <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                                <StaggerText>
                                    We work for governments — not for the investors or companies
                                    seeking access to them.
                                </StaggerText>
                            </h2>
                            <p className="leading-reg text-base text-white/70 md:w-full md:max-w-[45ch] lg:max-w-[50ch]">
                                We help governments build the structures, narrative and
                                international positioning they need to attract serious
                                investment on fair terms.
                            </p>
                        </div>
                    </div>
                    <div>
                        {GovernmentArray.map((service, i) => (
                            <div
                                key={i}
                                className={`flex grid-cols-2 flex-col items-start gap-4 border-b-1 border-white/10 py-4 last:border-b-0 md:grid md:items-center ${i === 0 ? "" : "border-t-1"}`}
                            >
                                <h3 className="text-md font-bold">{service.label}</h3>
                                <p className="max-w-[35ch] text-white/50 lg:max-w-full">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
                <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-8 md:gap-32">
                    <div className="flex w-full grid-cols-2 flex-col justify-between gap-4 md:flex-row lg:grid">
                        <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                            <StaggerText>Enagagement Models</StaggerText>
                        </h2>
                        <div>
                            <p className="leading-reg text-base text-white/70 md:w-full md:max-w-[45ch] lg:max-w-[50ch]">
                                We work with clients across four flexible models, from ongoing
                                strategic partnerships to focused project engagements
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="no-scrollbar flex-wrap md:flex-nowrap flex gap-8 overflow-x-auto border-white/10 py-4 md:flex lg:flex lg:flex-row lg:justify-center">
                            {engagementModels.map((model,i) => {
                               const features = model.fields.features
                                console.log(i)
                                return (  <div key={i} className={`border-primary flex min-h-[652px] ${ i === 1 ? "bg-primary" : " "}  min-w-[100%] flex-col gap-8 rounded-4xl border px-4 py-24 md:min-w-[60%] lg:w-[363px] lg:min-w-0`}>

                                <div className="flex flex-col gap-8 px-4">
                                    <h3 className="text-md font-bold">{model.fields.tier}</h3>
                                    <p className="max-w-[35ch] text-white/75 lg:max-w-full">
                                {model.fields.description}
                                    </p>
                                </div>

                                <div className="flex flex-col px-4">
                                    {features.map((feature:any ,i:any)=>{
                                        return(
                                        <span key={i} className="border-b-1 border-white/10 py-2 text-white/50">
                                        {feature}
                                    </span>)
                                    })}
                                    <span className="mt-8">
                                        <Button isLight={true} cta="Get Started" href="/contact" />
                                    </span>
                                </div>
                            </div>)
                            })}
                          
                        </div>
                    </div>
                </div>
            </section>
            <Foot />
        </>
    );
}
