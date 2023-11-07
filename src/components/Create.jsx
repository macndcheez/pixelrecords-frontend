import React from 'react'
import { Form } from 'react-router-dom'
import {useLoaderData} from "react-router-dom"

const Create = () => {
  return (
    <div style={{textAlign: "center"}}>
    <h2>Create an Entry</h2>
    <Form action="/create" method="post">
        <input type="text" name="game_title" placeholder="write game title here"/>
        <input type="date" name="date" placeholder="choose date"/>
        <input type="text" name="entry_subject" placeholder="write entry subject here"/>
        <input type="text" name="entry" placeholder="write entry here"/>
        <button>Create New Entry</button>
    </Form>
    </div>
  )
}

export default Create