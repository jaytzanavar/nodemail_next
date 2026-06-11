import { NextRequest, NextResponse } from 'next/server';
import { mailOptions, transporter } from '../../../../config/nodemailer';



export async function GET() {

    return NextResponse.json({ name: 'send the shmail' })
}


export async function POST(req: Request, res: Response) {
    const data = await req.json()

    const { name, email, subject, message, phone, elapsedMs } = data;
    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Time-trap: a real visitor takes several seconds to fill out the form.
    // Anything faster (or missing the timing entirely, e.g. a script POSTing
    // straight to this endpoint) is almost certainly a bot. Pretend success so
    // the bot believes it worked and does not retry.
    const MIN_SUBMIT_MS = 3000;
    if (typeof elapsedMs !== 'number' || elapsedMs < MIN_SUBMIT_MS) {
        console.warn('Mail blocked by time-trap:', { elapsedMs })
        return NextResponse.json({ success: 'Mail sent successfully!' }, { status: 200 })
    }

    try {
        await transporter.sendMail({
            from: mailOptions.from,
            to: mailOptions.to,
            replyTo: email,
            subject: `[Damouli Law Firm Website] ${subject} - From ${name}`,
            text: message,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #0e7490; padding: 18px 20px; border-radius: 8px 8px 0 0;">
                        <p style="margin: 0; color: #ffffff; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">Received via</p>
                        <h1 style="margin: 4px 0 0; color: #ffffff; font-size: 22px;">Damouli Law Firm — Website Contact Form</h1>
                    </div>
                    <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; padding: 24px;">
                        <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #0e7490; padding-bottom: 10px;">New Contact Form Submission</h2>
                        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                            <p><strong>Subject:</strong> ${subject}</p>
                        </div>
                        <h3 style="color: #333;">Message:</h3>
                        <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
                        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                        <p style="color: #999; font-size: 12px;">This message was submitted through the contact form on the Damouli Law Firm website.</p>
                    </div>
                </div>
            `
        })

        return NextResponse.json({ success: 'Mail sent successfully!' }, { status: 200 })
    }
    catch (error) {
        console.error('Mail error:', error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
}