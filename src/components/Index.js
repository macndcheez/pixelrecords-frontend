import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import Create from "./Create";

const Index = (props) => {
    
  const entry = useLoaderData()
  // For each post in the array render a Post component
  return <>

  {entry.map((post) => <Post entry={post} key={post.id} />)}
  </>;
  <Create />
};

export default Index;