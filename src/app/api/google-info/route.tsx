import { NextResponse } from 'next/server';



export async function GET() {

    console.log(process.env.NEXT_PUBLIC_GOOGLE_KEY);
    try {
        const res = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?&place_id=ChIJWxrp6KmioRQRHoSDV5l8VtM&fields=name,user_ratings_total,reviews,rating,formatted_phone_number&reviews_no_translations=true&language=el,en&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            })


        const results = await res.json()
        const { result } = results


        return NextResponse.json({ rating: result['rating'], reviews: result['reviews'] })
    }
    catch (error) {
        return NextResponse.json({ error: `Fail to retreive ` }, { status: 400 })
    }
}
