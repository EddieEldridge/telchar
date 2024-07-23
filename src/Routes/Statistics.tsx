import { NavLink } from "react-router-dom";
import "../Assets/css/App.css";

function Statistics() {
  return (
    <>
      <h1>Select your Statistics</h1>
      <NavLink to="/finish">
        <button>Proceed</button>
      </NavLink>
    </>
  );
}

export default Statistics;
