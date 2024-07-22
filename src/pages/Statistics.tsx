import { NavLink } from "react-router-dom";
import "../css/App.css";

function App() {
  return (
    <>
      <h1>Select your Statistics</h1>
      <NavLink to="/finish">
        <button>Proceed</button>
      </NavLink>
    </>
  );
}

export default App;
