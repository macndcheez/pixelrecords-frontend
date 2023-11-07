import { Link, useLoaderData } from "react-router-dom";

const Show = () => {
  const entry = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px dotted lightblue",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h2>{entry.game_title}</h2>
      <h3>{entry.entry_subject}</h3>
      <p>{entry.entry}</p>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;