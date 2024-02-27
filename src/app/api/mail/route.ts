import { NextRequest, NextResponse } from 'next/server';
import { mailOptions, transporter } from '../../../../config/nodemailer';



export async function GET() {

    return NextResponse.json({ name: 'send the shmail' })
}


export async function POST(req: Request, res: Response) {
    const data = await req.json()

    console.log(data)
    const { name, email, subject, message } = data;
    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: 'Missing attributes' }, { status: 400 })
    }

    try {
        await transporter.sendMail({
            ...mailOptions, subject: subject, text: "This is a test string",
            html: `<h1>This mail arrived from ${name}</h1>
    <h3 class="text-blue-500"><a href=mailto:${email}> email: ${email} </a></h3 > <p>${message} </p>`
        })

        return NextResponse.json({ success: 'Mail sent successfully!' }, { status: 200 })
    }
    catch (error) {
        return NextResponse.json({ error: 'Bad Request' }, { status: 400 })
    }


    return NextResponse.json(data)
}