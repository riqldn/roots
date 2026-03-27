"use client"
import React from 'react'
import NavBar from '../components/NavBar'
import StaggerText from '../components/StaggerText'
import Button from '../components/Button'
import Image from 'next/image'
import { motion } from 'motion/react'
import story from "../../assets/our-story-image.png"
import Sukai from "../../assets/co-founder.jpg"
import Abu from "../../assets/founder.jpg"
import matter from "../../assets/why-we-matter-image.png"
import Foot from '../components/Foot'
export default function About() {

    const values = [
        {
            num: "01",
            title: "Impact",
            desc: "We measure our success by the quality of the decisions our intelligence enables, not by the volume of reports we produce.",
        },
        {
            num: "02",
            title: "Proximity",
            desc: "Our intelligence comes from the ground, not from a distance. We are embedded in the region we analyse, not observing it from afar.",
        },
        {
            num: "03",
            title: "Independence",
            desc: "We serve our clients, not the institutions or governments we analyse. Our assessments are never shaped by whose side we are on.",
        }
    ]

    return (
        <>
            <NavBar />
            <section className="min-h-max pb-12 w-full overflow-x-hidden border-b-1 border-white/10">
                <div className="pt-12 w-9/10 min-h-max mx-auto">
                    {/* Hero Grid */}
                    <div className="lg:grid grid-cols-12 md:flex md:flex-col md:gap-8 overflow-x-hidden">
                        <div className="justify-between lg:gap-24 md:gap-8 gap-12 col-start-1 col-end-13 flex flex-col min-h-max">
                            {/* Hero headings and subheading */}
                            <div className="flex flex-col gap-4">
                                <span className="font-medium text-primary">
                                    <StaggerText>About us</StaggerText>
                                </span>
                                <h1 className="lg:text-3xl md:text-xl text-lg font-bold tracking-xtra leading-[100%]">
                                    <StaggerText>West Africa is not a risk to be managed. It is an opportunity to be understood.</StaggerText>
                                </h1>
                            </div>
                            {/* Hero paragraphs */}
                            <div className="flex justify-between flex-col md:flex-row gap-4">
                                <p className="leading-reg lg:max-w-[45ch] max-w-[30ch]">
                                    <StaggerText>
                                        We exist to bring a young, embedded perspective to an industry dominated by legacy institutions. We operate where decisions are made.
                                    </StaggerText>
                                </p>
                                <p className="leading-reg lg:max-w-[45ch] max-w-[30ch]">
                                    <StaggerText>
                                        We hold the relationships others don&apos;t have access to. We understand the cultural context that algorithms cannot replicate. This is our region. This is our moment.
                                    </StaggerText>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Story */}
            <section className="min-h-screen pb-12 w-full overflow-x-hidden border-b-1 border-white/10">
                <div className="pt-12 w-9/10 min-h-screen mx-auto">
                    <div className="lg:grid grid-cols-12 flex flex-col gap-8 overflow-x-hidden">
                        <div className='flex flex-col col-start-1 col-end-7'>
                            <h2 className="text-[2rem] md:text-xl font-bold tracking-xtra md:w-1/2">
                                <StaggerText>Our Story</StaggerText>
                            </h2>
                            <motion.div transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                                viewport={{ once: true, margin: "-15%" }} initial={{ filter: "blur(20px", opacity: 0 }} whileInView={{ filter: "blur(0px)", opacity: 1 }} className='w-full lg:w-9/10'>
                                <Image className='w-full' height={725} width={546} alt="an empty retro office" src={story} />
                            </motion.div>

                        </div>
                        <motion.p transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                            viewport={{ once: true, margin: "-15%" }} initial={{ filter: "blur(20px", opacity: 0 }} whileInView={{ filter: "blur(0px)", opacity: 1 }} className='leading-reg text-white/75 self-end col-start-8 col-end-13'>
                            Roots Policy Consulting was born from a conviction: the world's most consequential emerging region was being misread, misrepresented and underserved by the institutions claiming to understand it.
                            <br /><br />

                            We saw what others missed. West Africa today is where the Middle East was before its boom — natural resources being restructured, political frameworks evolving, investment flowing in. The fundamentals are there. What's missing is clarity.
                            <br /><br />
                            Founded by Abu Bakarr Kamara, we exist to bring a young, embedded perspective to an industry dominated by legacy institutions. We operate where decisions are made. We hold the relationships others don't have access to. We understand the cultural context that algorithms cannot replicate.
                            <br /><br />
                            This is our region. This is our moment.
                        </motion.p>
                    </div>
                </div>
            </section>
            {/* Our Values */}
            <section className="border-y-1 border-white/10 py-16 min-h-max w-full overflow-x-hidden">
                <div className="w-9/10 flex flex-col md:gap-32 justify-between min-h-max mx-auto">
                    <div className="flex justify-between md:flex-row flex-col w-full">
                        <h2 className="text-lg md:text-xl font-bold tracking-xtra md:w-1/2">
                            <StaggerText>Our Values</StaggerText>
                        </h2>

                    </div>
                    <motion.div
                        initial="initial"
                        viewport={{ once: true }}
                        whileInView="inView"
                        className="md:grid grid-cols-3 divide-x divide-y divide-white/[0.04]"
                    >
                        {values.map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-background lg:px-12 md:px-4 md:py-24 px-4 py-12 duration-200"
                                variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                                transition={{ delay: i * 0.25, ease: "easeInOut" }}
                            >
                                <span className='inline-block mb-16'>{item.num} </span>
                                <h3 className="text-md font-bold mb-2">{item.title}</h3>
                                <p className="md:max-w-[50ch] max-w-[30ch] text-white/50 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            {/* Vision & Mission */}
            <section className="border-y-1 border-white/10 py-16 min-h-max w-full overflow-x-hidden">
                <div className="w-9/10 flex flex-col gap md:gap-8 justify-between min-h-max mx-auto">
                    <div className="flex justify-between md:flex-row flex-col w-full">
                        <h2 className="text-lg md:text-xl font-bold tracking-xtra md:w-1/2">
                            <StaggerText>Vision & Mission</StaggerText>
                        </h2>

                    </div>
                    <motion.div
                        initial="initial"
                        viewport={{ once: true }}
                        whileInView="inView"
                        className="md:grid grid-cols-2 divide-x  divide-white/[0.04]"
                    >

                        <motion.div
                            className="bg-background  md:px-4 md:py-24 px-4 py-12 duration-200"
                            variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                            transition={{ delay: 1 * 0.25, ease: "easeInOut" }}
                        >

                            <h3 className="text-md text-primary font-bold mb-8">Vision</h3>
                            <p className="max-w-[40ch]  text-white/50 leading-relaxed">To become the leading political intelligence firm shaping strategy and narrative around West African geopolitics and economic development</p>
                        </motion.div>
                        <motion.div
                            className="bg-background lg:px-12 md:px-4 md:py-24 px-4 py-12 duration-200"
                            variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                            transition={{ delay: 1 * 0.25, ease: "easeInOut" }}
                        >

                            <h3 className="text-md text-primary font-bold mb-8">Mission</h3>
                            <p className="max-w-[40ch]  text-white/50 leading-relaxed">To become the leading political intelligence firm shaping strategy and narrative around West African geopolitics and economic development</p>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
            {/* Why We Matter */}
            <section className="min-h-screen pb-12 w-full overflow-x-hidden border-b-1 border-white/10">
                <div className="pt-12 w-9/10 min-h-screen mx-auto">
                    <div className="lg:grid grid-cols-12 flex flex-col gap-8 overflow-x-hidden">
                        <div className='flex flex-col col-start-1 col-end-7'>
                            <h2 className="text-[2rem] md:text-xl font-bold tracking-xtra">
                                <StaggerText>Why We Matter</StaggerText>
                            </h2>
                            <motion.div transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                                viewport={{ once: true, margin: "-15%" }} initial={{ filter: "blur(20px", opacity: 0 }} whileInView={{ filter: "blur(0px)", opacity: 1 }} className='w-full lg:w-9/10'>
                                <Image className='w-full' height={725} width={546} alt="an empty retro office" src={matter} />
                            </motion.div>

                        </div>
                        <motion.p transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                            viewport={{ once: true, margin: "-15%" }} initial={{ filter: "blur(20px", opacity: 0 }} whileInView={{ filter: "blur(0px)", opacity: 1 }} className='leading-reg text-white/75 self-center col-start-8 col-end-13'>
                            West Africa is at an inflection point. Natural resource frameworks are being restructured. Political transitions are reshaping power. Regulatory environments are evolving rapidly.
                            <br /><br />
                            AI and algorithms may dominate global analysis — but they fall short in Africa. The region's data deficit makes automated analysis fundamentally inadequate. Critical insights live in informal networks, unwritten agreements and oral communication channels no dataset captures.
                            <br /><br />
                            We provide the human advantage in markets where relationships, trust and local knowledge determine success
                        </motion.p>
                    </div>
                </div>
            </section>
            {/* Our Founder*/}
            <section className="border-y-1 border-white/10 py-16 min-h-max w-full overflow-x-hidden">
                <div className="w-9/10 flex flex-col gap md:gap-8 justify-between min-h-max mx-auto">
                    <div className="flex justify-between md:flex-row flex-col w-full">
                        <h2 className="text-lg md:text-xl font-bold tracking-xtra md:w-1/2">
                            <StaggerText>Our Founder</StaggerText>
                        </h2>

                    </div>
                    <motion.div
                        initial="initial"
                        viewport={{ once: true }}
                        whileInView="inView"
                        className="md:grid grid-cols-2 justify-items-center divide-white/[0.04]"
                    >

                        <motion.div
                            className="bg-background  md:py-24  py-12 duration-200"
                            variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                            transition={{ delay: 1 * 0.25, ease: "easeInOut" }}
                        >
                            <Image className='mb-4' width={361} height={451} src={Sukai} alt='Sukai the co-founder of Roots' />
                            <div className='mb-4'>
                                <h3 className="text-md text-white font-bold ">Sukai Secka</h3>

                                <h4 className='text-white/75'>Co-Founder & Policy Lead</h4>
                            </div>


                            <p className="max-w-[40ch]  text-white/50 leading-relaxed">Sukai is Co-Founder of Roots Policy Consulting, leading on political ethics, international law and sovereign governance across the UK-West Africa corridor. <br /><br />
                                Her work interrogates the power dynamics underpinning investment, development and regulatory systems — with a particular focus on neo-colonial structures in global markets.</p>
                        </motion.div>

                        <motion.div
                            className="bg-background   md:py-24  py-12 duration-200"
                            variants={{ initial: { opacity: 0 }, inView: { opacity: 1 } }}
                            transition={{ delay: 1 * 0.25, ease: "easeInOut" }}
                        >
                            <Image className='mb-4' width={361} height={451} src={Abu} alt='Abu Bakarr Kamara the founder of Roots' />
                            <div className='mb-4'>
                                <h3 className="text-md text-white font-bold ">Abu Bakarr Kamara</h3>

                                <h4 className='text-white/75'>Founder, Rise & Roots Group</h4>
                            </div>


                            <p className="max-w-[40ch]  text-white/50 leading-relaxed">Abu Bakarr Kamara is the Founder of Rise & Roots Group — built on one conviction: that West Africa's story must be told differently, and its political and economic future must be shaped from within.<br /><br /> With a background spanning marketing, politics and international relations, Abu Bakarr bridges political strategy, communications and on-the-ground reality.</p>
                        </motion.div>

                    </motion.div>
                </div>
            </section>
            {/* Cta */}
            <section className="border-y-1 border-white/10 py-16 min-h-max w-full overflow-x-hidden">
                <div className="w-9/10 min-h-max mx-auto">
                    <div className="flex justify-between flex-col md:gap-0 gap-8 md:flex-row">

                        <div className="w-full md:w-[60%] flex justify-between flex-col">
                            <h2 className="text-xl md:text-3xl leading-tight md:text-xl font-bold tracking-xtra ">
                                <StaggerText>Ready to navigate with confidence?</StaggerText>
                            </h2>
                            <p className="text-left max-w-[25ch] text-white/70 text-base leading-reg md:max-w-[45ch] md:w-1/2 lg:max-w-[50ch]">
                                Get in touch and tell us what you&apos;re working on.
                            </p>
                        </div>

                        <div className="self-start md:self-center">
                            <Button href='/contact' isLight={true} cta="Get in touch" />
                            <span className="text-sm text-white/50">info@riserootsgroup.com</span>
                        </div>
                    </div>

                </div>
            </section>
            <Foot />
        </>
    )
}
