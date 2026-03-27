// app/components/HomeClient.tsx
"use client"

import Image from "next/image"
import { motion } from "motion/react"
import StaggerText from "./StaggerText"
import WestAfricaMap from "./WestAfricaMap"
import Button from "./Button"
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

export default function HomeClient({ works }: { works: any[] }) {
    console.log(works)
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
    ]

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
            desc: "Our clients don&apos;t hire us to explain yesterday. They hire us to anticipate tomorrow. That is the only metric that matters.",
        }
    ]

    const CountUp = ({ target }: { target: number }) => {
        const [count, setCount] = useState(0)
        const ref = useRef(null)
        const isInView = useInView(ref, { once: true, margin: "0px 0px -90px 0px" })

        useEffect(() => {
            if (!isInView) return
            let start = 1
            const duration = 500
            const increment = target / (duration / 16)
            const timer = setInterval(() => {
                start += increment
                if (start >= target) {
                    setCount(target)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)
            return () => clearInterval(timer)
        }, [isInView, target])

        return <span ref={ref}>{count}</span>
    }

    return (
        <>
            <section className="min-h-screen pb-12 w-full overflow-x-hidden">
                <div className="pt-12 w-9/10 min-h-screen mx-auto">
                    <div className="lg:grid grid-cols-12 md:flex md:flex-col md:gap-8 overflow-x-hidden">
                        <div className="justify-between lg:gap-32 md:gap-4 gap-12 col-start-1 col-end-8 flex flex-col min-h-max">
                            <div className="flex flex-col gap-4">
                                <span className="font-medium text-primary">
                                    <StaggerText>Political Intelligence &#183; West Africa</StaggerText>
                                </span>
                                <h1 className="lg:text-3xl md:text-3xl text-lg font-bold tracking-xtra leading-xtra">
                                    <StaggerText>West Africa Is At An Inflection Point</StaggerText>
                                </h1>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="leading-reg lg:max-w-[45ch] max-w-[28ch]">
                                    <StaggerText>
                                        A specialist political-risk and policy-analysis consultancy delivering actionable intelligence across West Africa&apos;s most complex markets.
                                    </StaggerText>
                                </p>
                                <div className="flex flex-row gap-4">
                                    <Button isLight={true} cta="Get in touch" />
                                    <Button isLight={false} cta="Our services" />
                                </div>
                            </div>
                        </div>
                        <div className="col-start-8 col-end-12">
                            <WestAfricaMap className="lg:w-[496px] w-full" />
                        </div>
                        <div className="flex flex-row justify-around col-start-7 py-12 bg-white/3 rounded-2xl col-end-13">
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold"><CountUp target={6} /></span>
                                <span className="text-white/50">countries</span>
                            </div>
                            <span className="flex flex-col items-center">
                                <span className="font-bold text-3xl"><CountUp target={4} /></span>
                                <span className="text-white/50">service lines</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-1 border-white/10 py-16 min-h-max w-full overflow-x-hidden">
                <div className="w-9/10 min-h-max mx-auto">
                    <div className="flex justify-between md:flex-row flex-col w-full">
                        <h2 className="text-[2rem] md:text-xl font-bold tracking-xtra md:w-1/2">
                            <StaggerText>What we do</StaggerText>
                        </h2>
                        <p className="text-white/70 text-base md:text-md leading-reg md:max-w-[45ch] md:w-1/2 lg:max-w-[50ch]">
                            Roots Policy Consulting is a political intelligence company specialising in West Africa. We give investors, corporates and governments the insight they need to navigate complex geopolitics, and turn that understanding into confident decisions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-1 border-white/10 py-16 min-h-max w-full overflow-x-hidden">
                <div className="w-9/10 flex flex-col gap-32 justify-between min-h-max mx-auto">
                    <div className="flex justify-between md:flex-row flex-col w-full">
                        <h2 className="text-[2rem] md:text-xl font-bold tracking-xtra md:w-1/2">
                            <StaggerText>Who we serve</StaggerText>
                        </h2>
                        <p className="text-white/70 text-base leading-reg md:max-w-[45ch] md:w-1/2 lg:max-w-[50ch]">
                            We work with organisations where understanding West Africa's political landscape is not optional — it&apos;s the difference between success and exposure.
                        </p>
                    </div>
                    <motion.div
                        initial="initial"
                        viewport={{ once: true, amount: "some" }}
                        whileInView="inView"
                        className="md:grid grid-cols-2 divide-x divide-y divide-white/[0.04]"
                    >
                        {audiences.map((item, i) => (
                            <motion.div
                                key={item.num}
                                className="bg-background md:px-12 py-12 group hover:bg-[#0f0f14] transition-colors duration-200"
                                variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                                transition={{ delay: i * 0.25, ease: "easeInOut" }}
                            >
                                <p className="text-[12px] text-white/70 tabular-nums mb-3">{item.num}</p>
                                <h3 className="text-md font-medium mb-2 group-hover:text-white transition-colors duration-200">{item.title}</h3>
                                <p className="text-white/50 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="border-y-1 border-white/10 py-16 min-h-max w-full overflow-x-hidden">
                <div className="w-9/10 flex flex-col gap-12 md:gap-32 justify-between min-h-max mx-auto">
                    <div className="flex justify-between md:flex-row flex-col w-full">
                        <h2 className="text-lg md:text-xl font-bold tracking-xtra md:w-1/2">
                            <StaggerText>Why us</StaggerText>
                        </h2>
                        <p className="text-white/70 text-base leading-reg md:max-w-[45ch] md:w-1/2 lg:max-w-[50ch]">
                            Three things that separate our intelligence from every other firm claiming to understand the region.
                        </p>
                    </div>
                    <motion.div
                        initial="initial"
                        viewport={{ once: true }}
                        whileInView="inView"
                        className="md:grid grid-cols-3 divide-x divide-y divide-white/[0.04]"
                    >
                        {reasons.map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-background lg:px-12 md:px-4 md:py-24 px-4 py-12 duration-200"
                                variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                                transition={{ delay: i * 0.25, ease: "easeInOut" }}
                            >
                                <Image className="pb-12" alt="icon" src={item.icon} height={60} width={60} />
                                <h3 className="text-md font-medium mb-2">{item.title}</h3>
                                <p className="md:max-w-[50ch] max-w-[30ch] text-white/50 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Works from Contentful */}
            <section className="border-y-1 border-white/10 py-16 min-h-max w-full overflow-x-hidden">
                <div className="w-9/10 min-h-max mx-auto">
                    <div className="flex justify-between md:flex-row flex-col w-full mb-12">
                        <h2 className="text-[2rem] md:text-xl font-bold tracking-xtra md:w-1/2">
                            <StaggerText>Featured work</StaggerText>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {works.map((work: any) => {

                            console.log('categories:', JSON.stringify(work.fields.category, null, 2))
                            const imageUrl = work.fields.thumbnail?.fields?.file?.url
                                ? `https:${work.fields.thumbnail.fields.file.url}`
                                : null

                            const categories = work.fields.category || []

                            return (
                                <div
                                    key={work.sys.id}
                                    className="relative rounded-lg overflow-hidden cursor-pointer group h-[350px]"
                                >
                                    {/* Background image */}
                                    {imageUrl ? (
                                        <Image
                                            src={imageUrl}
                                            alt={work.fields.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1420] to-[#2d1f3d]" />
                                    )}

                                    {/* Dark gradient overlay — stronger at bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                    {/* Content sits on top of overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        {/* Category pills */}
                                        {Array.isArray(categories) && categories.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {categories.map((cat: any) => {
                                                    const label = cat.fields?.category  // ← was cat.fields?.name, should be cat.fields?.category

                                                    if (!label) return null

                                                    return (
                                                        <span
                                                            key={cat.sys.id}
                                                            className="text-[9px] tracking-widest uppercase px-2 py-1 bg-[#120C36] border border-[#6B5FE4]/30 text-primary rounded-md"
                                                        >
                                                            {label}
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                        )}


                                        {/* Title */}
                                        <h3 className="text-[13px] font-semibold text-white leading-snug">
                                            {work.fields.title}
                                        </h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
