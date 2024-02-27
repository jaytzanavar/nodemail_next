export const sendMailForm = async (data: any) => {
    console.log('sending data', data)
    return await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
}