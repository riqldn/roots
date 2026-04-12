import { getAllWorkSlugs, getWorkBySlug } from '@/app/contentful'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import NavBar from '@/app/components/NavBar'
import Foot from '@/app/components/Foot'
import RichText from '@/app/components/RichText'

export const revalidate = 60

export async function generateStaticParams() {
    const slugs = await getAllWorkSlugs()
    return slugs.map((slug: string) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const work = await getWorkBySlug(slug)
    if (!work) return {}
    return {
        title: `${work.fields.title} — Roots Policy Consulting`,
        description: work.fields.description || work.fields.subtitle,
    }
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params  // ← await params first

    console.log('slug received:', slug)

    const rawWork = await getWorkBySlug(slug)

    console.log('work found:', rawWork ? 'yes' : 'no')

    if (!rawWork) notFound()

    const work = rawWork as any

    const heroImageUrl = work.fields.heroImage?.fields?.file?.url
        ? `https:${work.fields.heroImage.fields.file.url}`
        : null

    const categories: any[] = work.fields.category || []

    return (
        <>
            <NavBar />

            <section className="min-h-max w-full overflow-x-hidden border-b-1 border-white/10 pb-12">
                <div className="mx-auto min-h-max w-9/10 pt-12">

                    {categories.length > 0 && (
                        <div className="flex gap-2 flex-wrap mb-6">
                            {categories.map((cat: any) => (
                                <span
                                    key={cat.sys.id}
                                    className=" px-2 py-1 bg-[#120c36] text-primary rounded-3xl"
                                >
                                    {cat.fields?.category}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="tracking-xtra text-lg font-bold md:text-xl lg:text-3xl mb-4">
                        {work.fields.title}
                    </h1>
                    <p className="text-white/70 text-base max-w-[50ch]">
                        {work.fields.subtitle}
                    </p>
                </div>
            </section>

            {heroImageUrl && (
                <div className="relative w-full h-[400px] md:h-[560px]">
                    <Image
                        src={heroImageUrl}
                        alt={work.fields.title}
                        fill
                        className="object-cover object-center object-left"
                        priority
                    />
                </div>
            )}
            {/* What we do */}
            {/* <section className="min-h-max w-full overflow-x-hidden border-y-1 border-white/10 py-16">
                <div className="mx-auto min-h-max w-9/10">
                    <div className="flex w-full flex-col justify-between md:flex-row">
                        <h2 className="tracking-xtra text-[2rem] font-bold md:w-1/2 md:text-xl">
                            <StaggerText>What we do</StaggerText>
                        </h2>
                        <p className="md:text-md leading-reg text-base text-white/70 md:w-1/2 md:max-w-[45ch] lg:max-w-[50ch]">
                            Roots Policy Consulting is a political intelligence company
                            specialising in West Africa. We give investors, corporates and
                            governments the insight they need to navigate complex geopolitics,
                            and turn that understanding into confident decisions.
                        </p>
                    </div>
                </div>
            </section> */}

            <section className="min-h-max w-full overflow-x-hidden py-16">
                <div className="mx-auto w-9/10">

                    {work.fields.description && (
                        <div className="md:col-span-3 mb-12">
                            <p className="text-white/70 text-base leading-relaxed max-w-[65ch]">
                                {work.fields.description}
                            </p>
                        </div>
                    )}
                    <div className='flex w-full flex-col'>


                        <div className="border-t-1 flex flex-col gap-4 md:flex-row border-white/10 pt-8 mb-8">
                            <h2 className="tracking-xtra text-[2rem] font-bold md:w-[100%] md:text-lg lg:text-xl">Challenge</h2>
                            <span className='lg:max-w-[55ch] md:max-w-[45ch] leading-reg'>
                                <RichText content={work.fields.challenge} />
                            </span>
                            
                        </div>

                       <div className="border-t-1 flex flex-col gap-4 md:flex-row border-white/10 pt-8 mb-8">
                            <h2 className="tracking-xtra text-[2rem] font-bold md:w-[100%] md:text-lg lg:text-xl">Solution</h2>
                            <span className='lg:max-w-[55ch] md:max-w-[45ch] leading-reg'>
                                <RichText content={work.fields.solution} />
                            </span>
                            
                        </div>

                        <div className="border-t-1 flex flex-col gap-4 md:flex-row border-white/10 pt-8 mb-8">
                            <h2 className="tracking-xtra text-[2rem] font-bold md:w-[100%] md:text-lg lg:text-xl">Impact</h2>
                            <span className='lg:max-w-[55ch] md:max-w-[45ch] leading-reg'>
                                <RichText content={work.fields.impact} />
                            </span>
                            
                        </div>
                    </div>
                </div>
            </section>

            <Foot />
        </>
    )
}