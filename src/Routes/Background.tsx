import { NavLink } from "react-router-dom";
import "../Assets/css/General.css";

function Background() {
  return (
    <>
      <h1>Select your Background</h1>
      <NavLink to="/name">
        <button>Proceed</button>
      </NavLink>
    </>
  );
}

export default Background;
