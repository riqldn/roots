"use client"
import React from 'react'
import NavBar from '../components/NavBar'
import StaggerText from '../components/StaggerText'
import Button from '../components/Button'
import Image from 'next/image'
import story from "../../assets/our-story-image.png"
export default function About() {
    return (
        <>
            <NavBar />
            <section className="min-h-screen pb-12 w-full overflow-x-hidden border-b-1 border-white">
                <div className="pt-12 w-9/10 min-h-screen mx-auto">
                    <div className="lg:grid grid-cols-12 md:flex md:flex-col md:gap-8 overflow-x-hidden">
                        <div className="justify-between lg:gap-24 md:gap-4 gap-12 col-start-1 col-end-13 flex flex-col min-h-max">
                            <div className="flex flex-col gap-4">
                                <span className="font-medium text-primary">
                                    <StaggerText>About us</StaggerText>
                                </span>
                                <h1 className="lg:text-3xl md:text-3xl text-lg font-bold tracking-xtra leading-[100%]">
                                    <StaggerText>West Africa is not a risk to be managed. It is an opportunity to be understood.</StaggerText>
                                </h1>
                            </div>
                            <div className="flex justify-between flex-col md:flex-row gap-4">
                                <p className="leading-reg lg:max-w-[45ch] max-w-[28ch]">
                                    <StaggerText>
                                        We exist to bring a young, embedded perspective to an industry dominated by legacy institutions. We operate where decisions are made.
                                    </StaggerText>
                                </p>
                                <p className="leading-reg lg:max-w-[45ch] max-w-[28ch]">
                                    <StaggerText>
                                        We hold the relationships others don&apos;t have access to. We understand the cultural context that algorithms cannot replicate. This is our region. This is our moment.
                                    </StaggerText>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-screen pb-12 w-full overflow-x-hidden border-b-1 border-white">
                <div className="pt-12 w-9/10 min-h-screen mx-auto">
                    <div className="lg:grid grid-cols-12 md:flex md:flex-col md:gap-8 overflow-x-hidden">
                        <div className='flex flex-col col-start-1 col-end-7'>
                            <h2 className="text-[2rem] md:text-xl font-bold tracking-xtra md:w-1/2">
                                <StaggerText>Our Story</StaggerText>
                            </h2>
                            <Image alt="" src={story}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
