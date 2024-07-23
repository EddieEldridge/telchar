import { NavLink } from "react-router-dom";
import "../Assets/css/General.css";

function Name() {
  return (
    <>
      <h1>Select your Name</h1>
      <NavLink to="/statistics">
        <button>Proceed</button>
      </NavLink>
    </>
  );
}

export default Name;
