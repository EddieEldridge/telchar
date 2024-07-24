import { NavLink } from "react-router-dom";
import "../Assets/css/General.css";
import { useContext } from "react";
import { CharacterContext } from "../Main";

function Name() {
  const character = useContext(CharacterContext);

  return (
    <>
      <h1>Select your Name</h1>
      <p>
        You have chosen {character.name} with culture {character.Culture?.name} and background {character.Culture?.background.name} and calling {character.Calling?.name}
      </p>
      <NavLink to="/statistics">
        <button>Proceed</button>
      </NavLink>
    </>
  );
}

export default Name;
