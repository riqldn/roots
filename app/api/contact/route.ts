// app/api/contact/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, organisation, email, message } = await req.json()

    // basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Roots Contact Form <noreply@riserootsgroup.com>', // change once domain verified
      to: [
    'kamara.abu@riserootsgroup.com',
    'info@riserootsgroup.com',
  ],
      replyTo: email,
      subject: `New enquiry from ${name} — ${organisation || 'No organisation'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6B5FE4;">New enquiry via Roots Policy Consulting</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Organisation</td>
              <td style="padding: 8px 0;">${organisation || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <p style="color: #666; margin: 0 0 8px;">Message</p>
            <p style="margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}