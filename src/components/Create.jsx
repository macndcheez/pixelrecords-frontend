import React from 'react'
import { Form } from 'react-router-dom'
import {useLoaderData} from "react-router-dom"

const Create = () => {

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyles = {
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  };

  const textAreaStyles = {
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  }

  return (
    <div style={{textAlign: "center"}}>
    <h2>Create an Entry</h2>
    <Form action="/create" method="post" style={formStyles}>
        <input type="text" name="game_title" placeholder="write game title here" style={inputStyles}/>
        <input type="date" name="date" placeholder="choose date" style={inputStyles}/>
        <input type="text" name="entry_subject" placeholder="write entry subject here" style={inputStyles}/>
        <input type="text" name="entry" placeholder="write entry here" style={textAreaStyles}/>
        <button>Create New Entry</button>
    </Form>
    </div>
  )
}

export default Create