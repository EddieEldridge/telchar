import { NavLink } from "react-router-dom";
import "../css/App.css";

function Calling() {
  return (
    <>
      <h1>Select your Calling</h1>
      <NavLink to="/background">
        <button>Proceed to</button>
      </NavLink>
    </>
  );
}

export default Calling;
