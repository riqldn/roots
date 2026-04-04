'use client'

import Image from 'next/image'
import Link from 'next/link'
import StaggerText from './StaggerText'

export default function ReportClient({ reports }: { reports: any[] }) {
    return (
        <section className="min-h-max w-full overflow-x-hidden border-y border-white/10 py-16">
            <div className="mx-auto min-h-max w-9/10">
                <div className="mb-12 flex w-full flex-col justify-between md:flex-row">
                    <h2 className="tracking-xtra text-[2rem] font-bold md:w-1/2 md:text-xl">
                        <StaggerText>Reports</StaggerText>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {reports.map((report, i) => {
                        const imageUrl = report.fields.thumbnail?.fields?.file?.url
                            ? `https:${report.fields.thumbnail.fields.file.url}`
                            : null

                        return (
                            <Link key={report.sys.id} href={`/reports/${report.fields.slug}`}>
                                <div className="group relative cursor-pointer overflow-hidden rounded-lg">
                                    {imageUrl ? (
                                        <Image
                                            src={imageUrl}
                                            alt={report.fields.title}
                                            width={1414}
                                            height={2000}
                                            className="transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="aspect-[707/1000] w-full bg-gradient-to-br from-[#1a1420] to-[#2d1f3d]" />
                                    )}
                                </div>

                                <div className="relative py-4">
                                    <h3 className="mb-2 text-[16px] font-semibold leading-snug text-white">
                                        {report.fields.title}
                                    </h3>
                                    <h4 className="text-[12px] font-semibold leading-snug text-white/50">
                                        {report.fields.date}
                                    </h4>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}