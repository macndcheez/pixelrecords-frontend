import { redirect } from "react-router-dom"

const URL = "https://pixelrecords-backend.onrender.com"


export const createAction = async ({request}) => {

    const formData = await request.formData()

    const newEntry = {
        game_title: formData.get("game_title"),
        date: formData.get("date"),
        entry_subject: formData.get('entry_subject'),
        entry: formData.get('entry')
    }
    await fetch(URL + "/entries/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    })

    return redirect("/")
}

export const updateAction = async ({request, params}) => {

    const formData = await request.formData()

    const id = params.id

    // construct request body
    const updatedEntry = {
        game_title: formData.get("game_title"),
        date: formData.get("date"),
        entry_subject: formData.get('entry_subject'),
        entry: formData.get('entry')
    }

    // send request to backend
    await fetch(URL + `/entries/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedEntry)
    })

    // redirect back to show page page
    return redirect(`/entries/${id}`)
}

export const deleteAction = async ({params}) => {

    const id = params.id

    await fetch(URL + `/entries/${id}/`, {
        method: "delete",
    })

    return redirect("/")
}