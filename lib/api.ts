export const sendMailForm = async (data: any) => {

    return await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
}


export const getRatingsReviews = async (data?: any | null) => {
    return await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_ENDPOINT}/api/google-info`, { cache: 'force-cache' })
}