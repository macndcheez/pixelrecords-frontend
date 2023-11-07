import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ entry }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/entries/${entry.id}`}>
        <h1>{entry.entry_subject}</h1>
      </Link>
      <h2>{entry.entry}</h2>
    </div>
  );
};

export default Post