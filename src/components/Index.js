import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const entry = useLoaderData()
  // For each post in the array render a Post component
  return <>
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
  {entry.map((post) => <Post entry={post} key={post.id} />)}
  </>;
};

export default Index;