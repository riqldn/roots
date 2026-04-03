// app/components/ContactForm.tsx
'use client'

import { useState } from 'react'


type FormState = 'idle' | 'loading' | 'success' | 'error'
const ARROW_PATH =
    "M11.8768 0.946282C11.8472 0.394793 11.3761 -0.0282566 10.8246 0.00137466L1.83759 0.484244C1.2861 0.513876 0.863053 0.984967 0.892684 1.53646C0.922315 2.08795 1.39341 2.51099 1.9449 2.48136L9.93337 2.05215L10.3626 10.0406C10.3922 10.5921 10.8633 11.0152 11.4148 10.9855C11.9663 10.9559 12.3893 10.4848 12.3597 9.93332L11.8768 0.946282ZM1.74403 12.6682L11.6223 1.66808L10.1343 0.331784L0.255974 11.3318L1.74403 12.6682Z";

export default function ContactForm() {
    const [formState, setFormState] = useState<FormState>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const [fields, setFields] = useState({
        name: '',
        organisation: '',
        email: '',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormState('loading')
        setErrorMessage('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fields),
            })

            const data = await res.json()

            if (!res.ok) {
                setErrorMessage(data.error || 'Something went wrong.')
                setFormState('error')
                return
            }

            setFormState('success')
            setFields({ name: '', organisation: '', email: '', message: '' })

        } catch (error) {
            setErrorMessage('Something went wrong. Please try again.')
            setFormState('error')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Name + Organisation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label className=" text-white/30">
                        Name
                    </label>
                    <input
                        name="name"
                        value={fields.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-white/[0.03] border border-white/10 rounded px-4 py-3  text-white placeholder-white/20 outline-none focus:border-[#6B5FE4]/50 transition-colors"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className=" text-white/30">
                        Organisation
                    </label>
                    <input
                        name="organisation"
                        value={fields.organisation}
                        onChange={handleChange}
                        placeholder="Your organisation"
                        className="bg-white/[0.03] border border-white/10 rounded px-4 py-3  text-white placeholder-white/20 outline-none focus:border-[#6B5FE4]/50 transition-colors"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
                <label className="   text-white/30">
                    Email
                </label>
                <input
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-white/[0.03] border border-white/10 rounded px-4 py-3  text-white placeholder-white/20 outline-none focus:border-[#6B5FE4]/50 transition-colors"
                />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
                <label className=" tracking-widets  text-white/30">
                    How can we help?
                </label>
                <textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, challenge or question..."
                    required
                    rows={6}
                    className="bg-white/[0.03] border border-white/10 rounded px-4 py-3  text-white placeholder-white/20 outline-none focus:border-[#6B5FE4]/50 transition-colors resize-none"
                />
            </div>

            {/* Error message */}
            {formState === 'error' && (
                <p className="text-red-400 text-[12px]">{errorMessage}</p>
            )}

            {/* Success message */}
            {formState === 'success' && (
                <p className="text-[#6B5FE4] text-[12px]">
                    Message sent — we'll be in touch shortly.
                </p>
            )}

            {/* Submit */}
            <button type="submit" disabled={formState === 'loading'} className="bg-primary flex flex-row items-center justify-center gap-2 rounded-md px-4 py-2 font-medium text-white hover:cursor hover-opacity-50 hover:bg-[#170F49] disabled:opacity-50 disabled:cursor-not-allowed">
                <span>Submit</span>
                <div className="bg-secondary flex overflow-hidden">
                    <span className="relative flex h-[13px] w-[13px] overflow-hidden">

                        {formState === 'loading' ? 'Sending...' : 'Send message'}
                        {formState !== 'loading' && (
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path d="M11.8768 0.946282C11.8472 0.394793 11.3761 -0.0282566 10.8246 0.00137466L1.83759 0.484244C1.2861 0.513876 0.863053 0.984967 0.892684 1.53646C0.922315 2.08795 1.39341 2.51099 1.9449 2.48136L9.93337 2.05215L10.3626 10.0406C10.3922 10.5921 10.8633 11.0152 11.4148 10.9855C11.9663 10.9559 12.3893 10.4848 12.3597 9.93332L11.8768 0.946282ZM1.74403 12.6682L11.6223 1.66808L10.1343 0.331784L0.255974 11.3318L1.74403 12.6682Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </span>
                </div>
            </button>
        </form>
    )
}