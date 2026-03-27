import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Foot() {

    const FOOTER_LINKS = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Works", href: "/works" },
        { label: "Services", href: "/services" },
        { label: "Insights", href: "/insights" },
        { label: "Contact", href: "/contact" },
    ]

    return (
        <section className="w-full min-h-max border-y-1 border-white/10">
            <footer className="w-9/10 flex justify-between flex-col md:flex-row min-h-max mx-auto">
                <div>
                    <Image src="/logo.svg" alt="Logo" width={150} height={60} priority />
                    <p className="leading-reg lg:text-base text-sm text-white/50 max-w-[30ch]">
                        the leading policy advisory firm shaping the narrative and strategy around West African economic development and youth empowerment.
                    </p>
                </div>
                <div className='flex flex-row gap-24'>
                    <div className="mt-12 flex flex-col">
                        <span className='font-bold text-white/50 mb-4'>Quick Links</span>
                        <div className='flex gap-2 flex-col'>
                            {FOOTER_LINKS.map((link, i) => {
                                return (<span className='text-white/85 hover:text-white'>
                                    <Link key={i} href={link.href}>{link.label}
                                    </Link>
                                </span>)
                            })}
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col">
                        <span className='mb-4 text-white/50 font-bold'>Contact</span>
                        <div className='flex gap-1 flex-col'>

                            <span className='text-white/85 hover:text-white'>
                                <Link href="">
                                    LinkedIn
                                </Link>
                            </span>

                            <span className='text-white/85 hover:text-white'>
                                <Link href="">
                                    Tiktok
                                </Link>
                            </span>
                            <span className='text-white/85 hover:text-white'>
                                <Link href="">
                                    Substack
                                </Link>
                            </span>
                            <span className='text-white/85 hover:text-white'>
                                <Link href="">
                                    info@rootspolicy.co.uk
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>

            </footer>
            <div className='mt-12 mb-2 text-center text-sm text-white/50'>All rights reserved - ©2026 Roots Policy</div>
        </section>
    )
}
