import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const entry = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    width: "80%",
    margin: "30px auto",
    background: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
    padding: "20px"
  };

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
    <div style={div}>
      <h1>{entry.game_title}</h1>
      <h1>{entry.entry_subject}</h1>
      <h3>{entry.date}</h3>
      <h2>{entry.entry}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Edit Entry</h2>
    <Form action={`/update/${entry.id}`} method="post" style={formStyles}>
      <input type="text" name="game_title" placeholder="write game title here" defaultValue={entry.game_title} style={inputStyles} />
      <input type="date" name="date" placeholder="choose date" defaultValue={entry.date} style={inputStyles} />
      <input type="text" name="entry_subject" placeholder="write entry subject here" defaultValue={entry.entry_subject} style={inputStyles} />
      <textarea name="entry" placeholder="write entry here" defaultValue={entry.entry} style={textAreaStyles} />
      <button>Update Entry</button>
    </Form>
    <Form action={`/delete/${entry.id}`} method="post" style={formStyles}>
        <button>Delete Todo</button>
    </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;