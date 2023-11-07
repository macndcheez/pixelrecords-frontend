import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = () => {
  const entry = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{entry.subject}</h1>
      <h2>{entry.details}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Edit an Entry</h2>
    <Form action={`/update/${entry.id}`} method="post">
      <input type="text" name="game_title" placeholder="write game title here" defaultValue={entry.game_title}/>
      <input type="date" name="date" placeholder="choose date" defaultValue={entry.date}/>
      <input type="text" name="entry_subject" placeholder="write entry subject here" defaultValue={entry.entry_subject}/>
      <input type="text" name="entry" placeholder="write entry here" defaultValue={entry.entry}/>
      <button>Update Entry</button>
    </Form>
    <Form action={`/delete/${entry.id}`} method="post">
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