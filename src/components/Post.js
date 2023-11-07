import { Link } from "react-router-dom";


const Post = ({ entry }) => {

  const div = {
    textAlign: "center",
    border: "5px solid white",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/entries/${entry.id}`} className="link-without-underline">
        <h1>{entry.game_title}</h1>
      </Link>
      <h2>{entry.entry_subject}</h2>
      <h3>{entry.entry}</h3>
    </div>
  );
};

export default Post