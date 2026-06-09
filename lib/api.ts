export const sendMailForm = async (data: any) => {
    // Same-origin request — the API route lives in this app
    return await fetch(`/api/mail`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
}


export const getRatingsReviews = async (data?: any | null) => {
    const apiEndpoint = process.env.API_ENDPOINT;
    return await fetch(`${apiEndpoint}/api/google-info`, { cache: 'force-cache' })
}