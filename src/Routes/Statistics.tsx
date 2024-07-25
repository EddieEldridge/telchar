import { NavLink, redirect } from "react-router-dom";
import "../Assets/css/General.css";
import { useContext } from "react";
import { CharacterContext } from "../Main";
import StatsPicker from "../Components/StatsPicker";
import lotrLogo from "../Assets/images/logo.png";

function Statistics() {
  const character = useContext(CharacterContext);

  if (!character) {
    redirect("/");
  }

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
            <StatsPicker></StatsPicker>
          </div>
        </main>
      </div>
    </>
  );
}

export default Statistics;
