import { NextResponse } from 'next/server';
import { fileExists, readFile, routeStringToPathName, writeFile } from '../../../../lib/file-utils';



export async function GET() {

    const reqString = `https://maps.googleapis.com/maps/api/place/details/json?&place_id=ChIJWxrp6KmioRQRHoSDV5l8VtM&fields=name,user_ratings_total,reviews,rating,formatted_phone_number&reviews_no_translations=true&language=el,en&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`;
    const pathName = routeStringToPathName(reqString)
    try {
        if (fileExists(routeStringToPathName(reqString))) {
            const file = await readFile(pathName) as any;

            const currentM = new Date()

            if (file['date'] !== currentM.getMonth()) {
                const res = await fetch(
                    reqString,
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                const results = await res.json()
                const { result } = results
                await writeFile(pathName, result, currentM.getMonth())
                return NextResponse.json({ rating: result['rating'], reviews: result['reviews'] })
            }
            else {
                return NextResponse.json({ rating: file['rating'], reviews: file['reviews'] })
            }

        }
        else {


            const res = await fetch(
                reqString,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })


            const results = await res.json()
            const { result } = results

            const d = new Date();
            await writeFile(pathName, result, d.getMonth())
            return NextResponse.json({ rating: result['rating'], reviews: result['reviews'] })
        }
    }
    catch (error) {
        return NextResponse.json({ error: `Fail to retreive ` }, { status: 400 })
    }
}
