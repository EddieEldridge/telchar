import { NavLink } from "react-router-dom";
import "../css/App.css";

function App() {
  return (
    <>
      <h1>Select your Background</h1>
      <NavLink to="/name">
        <button>Proceed</button>
      </NavLink>
    </>
  );
}

export default App;
