import { NextResponse } from 'next/server';
import { fileExists, readFile, routeStringToPathName, writeFile } from '../../../../lib/file-utils';



export async function GET() {

    const reqString = `https://maps.googleapis.com/maps/api/place/details/json?&place_id=ChIJWxrp6KmioRQRHoSDV5l8VtM&fields=name,user_ratings_total,reviews,rating,formatted_phone_number&reviews_no_translations=true&language=el,en&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`;
    const pathName = routeStringToPathName(reqString)

    const fetchFreshReviews = async () => {
        const res = await fetch(reqString, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const results = await res.json()
        const { result } = results
        // Google returns no `result` on bad/missing API key — treat as failure
        // so we never overwrite a good cache with empty data.
        if (!result || !result['reviews']) return null
        await writeFile(pathName, result, new Date().getMonth())
        return { rating: result['rating'], reviews: result['reviews'] }
    }

    try {
        const cached = fileExists(pathName) ? await readFile(pathName) as any : null
        const cacheIsValid = cached && cached['reviews']

        if (cacheIsValid && cached['date'] === new Date().getMonth()) {
            return NextResponse.json({ rating: cached['rating'], reviews: cached['reviews'] })
        }

        const fresh = await fetchFreshReviews().catch(() => null)
        if (fresh) {
            return NextResponse.json(fresh)
        }

        // Refresh failed — serve stale cache rather than nothing.
        if (cacheIsValid) {
            return NextResponse.json({ rating: cached['rating'], reviews: cached['reviews'] })
        }

        return NextResponse.json({ error: `Fail to retreive ` }, { status: 400 })
    }
    catch (error) {
        return NextResponse.json({ error: `Fail to retreive ` }, { status: 400 })
    }
}
