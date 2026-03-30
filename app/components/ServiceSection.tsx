// components/ServiceSection.tsx
"use client"

import StaggerText from "./StaggerText"

interface ServiceItem {
    label: string
    description: string
}

interface ServiceSectionProps {
    label: string
    tagline: string
    description: string
    items: ServiceItem[]
}

export default function ServiceSection({ label, tagline, description, items }: ServiceSectionProps) {
    return (
        <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
            <div className="mx-auto flex min-h-max w-9/10 flex-col justify-between gap-8 md:gap-32">
                <div className="flex w-full grid-cols-2 flex-col justify-between gap-4 md:flex-row lg:grid">
                    <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                        <StaggerText>{label}</StaggerText>
                    </h2>
                    <div className="flex flex-col gap-4">
                        <h2 className="tracking-xtra text-[2rem] leading-tight font-bold">
                            <StaggerText>{tagline}</StaggerText>
                        </h2>
                        <p className="leading-reg text-base text-white/70 md:w-full md:max-w-[45ch] lg:max-w-[50ch]">
                            {description}
                        </p>
                    </div>
                </div>
                <div>
                    {items.map((service, i) => (
                        <div
                            key={service.label}
                            className={`flex grid-cols-2 flex-col items-start gap-4 border-b-1 border-white/10 py-4 last:border-b-0 md:grid md:items-center ${i === 0 ? "" : "border-t-1"}`}
                        >
                            <h3 className="text-md font-bold">{service.label}</h3>
                            <p className="max-w-[35ch] text-white/50 lg:max-w-full">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}