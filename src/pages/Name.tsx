import { NavLink } from "react-router-dom";
import "../css/App.css";

function App() {
  return (
    <>
      <h1>Select your Name</h1>
      <NavLink to="/statistics">
        <button>Proceed</button>
      </NavLink>
    </>
  );
}

export default App;
