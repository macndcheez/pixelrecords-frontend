import {Outlet} from "react-router-dom"
import { Link } from "react-router-dom";
import Create from "./components/Create";
import './App.css'


function App() {


  return (
    <div className="App">
    <Link to={`/`} className="link-without-underline">
      <h1 >Pixel Records</h1>
    </Link>
      <Outlet/>
    </div>
  );
}

export default App