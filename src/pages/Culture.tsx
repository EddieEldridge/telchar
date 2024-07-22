import { NavLink } from "react-router-dom";
import "../css/App.css";

function App() {
  return (
    <>
      <h1>Select your culture</h1>
      <NavLink to="/calling">
        <button>Proceed</button>
      </NavLink>
    </>
  );
}

export default App;
