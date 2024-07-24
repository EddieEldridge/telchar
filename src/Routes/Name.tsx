import { NavLink } from "react-router-dom";
import "../Assets/css/General.css";
import { useContext } from "react";
import { CharacterContext } from "../Main";
import lotrLogo from "../Assets/images/logo.png";

function Name() {
  const character = useContext(CharacterContext);

  return (
    <>
      <div className="container">
        <main>
          {" "}
          {/* Navbar */}
          <aside className="nav">
            <NavLink to={"/"}>
              <img src={lotrLogo} className="logo" />
            </NavLink>
          </aside>
          {/* Content */}
          <div className="content">
            <h1>Select your statistics</h1>
            <hr />
          </div>
        </main>
      </div>
    </>
  );
}

export default Name;
