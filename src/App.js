import {Outlet, useLocation} from "react-router-dom"
import { Link } from "react-router-dom";
import Create from "./components/Create";
import './App.css'


function App() {
  const location = useLocation();

  const isEntryPage = location.pathname.startsWith('/entries/')
  return (
    <div className="App">
    <Link to={`/`} className="link-without-underline">
      <h1 >Pixel Records</h1>
    </Link>
      <Outlet/>
      {!isEntryPage && (

      <Link to="/create">
        <button>Create New Entry</button>
      </Link>
      )}

    </div>
  );
}

export default App