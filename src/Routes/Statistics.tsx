import { NavLink } from "react-router-dom";
import "../Assets/css/General.css";
import { useContext } from "react";
import { CharacterContext } from "../Main";

function Statistics() {
  const character = useContext(CharacterContext);

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
