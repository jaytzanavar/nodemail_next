import { NextRequest, NextResponse } from 'next/server';
import { mailOptions, transporter } from '../../../../config/nodemailer';



export async function GET() {

    return NextResponse.json({ name: 'send the shmail' })
}


export async function POST(req: Request, res: Response) {
    const data = await req.json()

    const { name, email, subject, message, phone } = data;
    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    try {
        await transporter.sendMail({
            from: mailOptions.from,
            to: mailOptions.to,
            replyTo: email,
            subject: `${subject} - From ${name}`,
            text: message,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">New Contact Form Submission</h2>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                        <p><strong>Subject:</strong> ${subject}</p>
                    </div>
                    <h3 style="color: #333;">Message:</h3>
                    <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #999; font-size: 12px;">This email was sent from your law firm website contact form.</p>
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