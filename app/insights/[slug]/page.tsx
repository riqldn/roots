import { getAllReportSlugs, getReportBySlug } from '@/app/contentful'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import NavBar from '@/app/components/NavBar'
import Foot from '@/app/components/Foot'
import Link from 'next/link'

export const revalidate = 60

const ARROW_PATH =
    "M11.8768 0.946282C11.8472 0.394793 11.3761 -0.0282566 10.8246 0.00137466L1.83759 0.484244C1.2861 0.513876 0.863053 0.984967 0.892684 1.53646C0.922315 2.08795 1.39341 2.51099 1.9449 2.48136L9.93337 2.05215L10.3626 10.0406C10.3922 10.5921 10.8633 11.0152 11.4148 10.9855C11.9663 10.9559 12.3893 10.4848 12.3597 9.93332L11.8768 0.946282ZM1.74403 12.6682L11.6223 1.66808L10.1343 0.331784L0.255974 11.3318L1.74403 12.6682Z"
export async function generateStaticParams() {
    const slugs = await getAllReportSlugs()
    return slugs.map((slug: string) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const report = await getReportBySlug(slug)
    if (!report) return {}
    return {
        title: `${report.fields.title} — Roots Policy Consulting`,
        description: report.fields.description,
    }
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params  // ← await params first

    console.log('slug received:', slug)

    const rawReport = await getReportBySlug(slug)

    console.log('report found:', rawReport ? 'yes' : 'no')

    if (!rawReport) notFound()

    const report = rawReport as any

    const imageUrl = report.fields.thumbnail?.fields?.file?.url
        ? `https:${report.fields.thumbnail.fields.file.url}`
        : null


    return (
        <>
            <NavBar />

            <section className="min-h-max w-full overflow-x-hidden border-b-1 border-white/10 pb-12">
                <div className="mx-auto items-center gap-4 flex flex-col  lg:grid grid-cols-2 min-h-max w-9/10 pt-12">

                    <div className='order-1 flex flex-col gap-4'>

                        <h1 className="tracking-xtra text-smd font-bold md:text-xl lg:text-xl mb-4">
                            {report.fields.title}
                        </h1>
                        <p className='leading-reg max-w-[45ch] text-white/60'>
                            {report.fields.description}
                        </p>

                        <div className="w-max">
                            <Link
                                className=
                                "bg-primary flex flex-row items-center justify-center gap-2 rounded-md px-4 py-2 font-medium text-white"
                                href={report.fields.link}
                            >
                                <span>Read More</span>
                                <span className="flex h-[13px] w-[13px]">
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d={ARROW_PATH} fill="white" />
                                    </svg>
                                </span>
                            </Link>
                        </div>

                    </div>

                    {imageUrl && (
                        <div className="order-first lg:order-last relative w-9/10 h-auto ">
                            <Image
                                src={imageUrl}
                                alt={report.fields.title}
                                width={1414}
                                height={2000}
                                className="transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    )}
                </div>
            </section>





            <Foot />
        </>
    )
} 