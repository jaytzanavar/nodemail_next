export const sendMailForm = async (data: any) => {
    const apiEndpoint = process.env.SERVER_API_ENDPOINT;
    return await fetch(`${apiEndpoint}/api/mail`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
}


export const getRatingsReviews = async (data?: any | null) => {
    const apiEndpoint = process.env.SERVER_API_ENDPOINT;
    return await fetch(`${apiEndpoint}/api/google-info`, { cache: 'force-cache' })
}