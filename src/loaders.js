
const URL = "https://pixelrecords-backend.onrender.com"


export const indexLoader = async () => {
    const response = await fetch(URL + "/entries/")
    const entry = await response.json()
    return entry
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/entries/${params.id}/`)
    const entry = await response.json()
    return entry
}