'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StaggerText from './StaggerText'

export default function PortfolioClient({ works }: { works: any[] }) {

    // collect all unique categories across all works
    const allCategories = Array.from(
        new Set(
            works.flatMap((work) =>
                (work.fields.category || []).map((cat: any) => cat.fields?.category)
            ).filter(Boolean)
        )
    )

    const [activeFilter, setActiveFilter] = useState<string | null>(null)

    // filter works based on active category
    const filtered = activeFilter
        ? works.filter((work) =>
            (work.fields.category || []).some(
                (cat: any) => cat.fields?.category === activeFilter
            )
        )
        : works

    return (
        <>
            {/* Hero */}
            <section className="min-h-max w-full overflow-x-hidden border-b-1 border-white/10 pb-12">
                <div className="mx-auto min-h-max w-9/10 pt-12">
                    <div className="flex flex-col gap-4">
                        <span className="text-primary font-medium">
                            <StaggerText>Portfolio</StaggerText>
                        </span>
                        <h1 className="tracking-xtra text-lg font-bold md:text-xl lg:text-3xl">
                            <StaggerText>A snapshot of our intelligence in action.</StaggerText>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Filter buttons */}
            <section className="w-full border-b-1 border-white/10 py-6">
                <div className="mx-auto w-9/10 flex gap-3 flex-wrap">

                    {/* All button */}
                    <button
                        onClick={() => setActiveFilter(null)}
                        className={`text-[10px] tracking-widest uppercase px-4 py-2 rounded-3xl border transition-colors duration-200 ${activeFilter === null
                            ? 'bg-[#120C36] border-primary text-primary'
                            : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
                            }`}
                    >
                        All
                    </button>

                    {/* Category buttons */}
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`text-[10px] tracking-widest uppercase px-4 py-2 rounded-3xl border transition-colors duration-200 ${activeFilter === category
                                ? 'bg-[#120C36] border-primary text-primary'
                                : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
                                }`}
                        >
                            {category}
                        </button>
                    ))}

                </div>
            </section>

            {/* Works grid */}
            <section className="w-full py-12">
                <div className="mx-auto w-9/10">

                    {filtered.length === 0 ? (
                        <p className="text-white/50 text-sm">No works found.</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filtered.map((work: any, i : number) => {
                                const imageUrl = work.fields.thumbnail?.fields?.file?.url
                                    ? `https:${work.fields.thumbnail.fields.file.url}`
                                    : null

                                const categories: any[] = work.fields.category || []

                                return (
                                    <Link key={i * 100} href={`portfolio/${work.fields.slug}`}>
                                        <div key={work.sys.id * 5}>
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
                                )
                            })}
                        </div>
                    )}

                </div>
            </section>
        </>
    )
}
