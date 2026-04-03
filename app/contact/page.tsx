// app/contact/page.tsx
import NavBar from '@/app/components/NavBar'
import Foot from '@/app/components/Foot'
import ContactForm from '@/app/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <section className="min-h-max w-full overflow-x-hidden border-b-1 border-white/10 pb-12">
        <div className="mx-auto min-h-max w-9/10 pt-12">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-primary font-medium">Contact</span>
            <h1 className="tracking-xtra text-lg font-bold md:text-xl lg:text-3xl">
              Let's talk.
            </h1>
            <p className="text-white/70 max-w-[45ch]">
              If your success depends on understanding West Africa's political landscape — we're built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ContactForm />

            {/* Aside */}
            <div className="flex flex-col gap-8">
              <div className="border-t-1 border-white/10 pt-8">
                <p className="text-primary mb-3">Direct</p>
                <p className="text-white/70">info@riserootsgroup.com</p>
                <p className="text-white/30 text-[12px] mt-1">We aim to respond within 24 hours.</p>
              </div>
              <div className="border-t-1 border-white/10 pt-8">
                <p className="text-primary mb-3">Find us</p>
                <div className="flex flex-col gap-3">
                  <a href="https://www.linkedin.com/company/roots-policy-consulting/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors ">LinkedIn →</a>
                  <a href="https://riserootswestafrica.substack.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors ">Substack →</a>
                  <a href="https://www.tiktok.com/@riseandrootsmedia" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors ">TikTok →</a>
                </div>
              </div>
              <div className="border-t-1 border-white/10 pt-8">
                <p className=" text-primary mb-3">Based in</p>
                <p className="text-white/70">London, UK</p>
                <p className="text-white/30 text-[12px] mt-1">Operating across West Africa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Foot />
    </>
  )
}
