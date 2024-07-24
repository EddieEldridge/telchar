import "../Assets/css/General.css";
import { Link, NavLink } from "react-router-dom";
import CallingInfo from "../Components/CallingInfo";
import { useState } from "react";
import lotrLogo from "../Assets/images/logo.png";
import { Calling } from "../Types/Calling";
import { CAPTAIN } from "../Data/Callings/Captain";

export const CALLINGS: Calling[] = [];
CALLINGS.push(CAPTAIN);

function CallingPage() {
  const [selectedCalling, setSelectedCalling] = useState(CALLINGS[0].id);

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
            <hr />
            <Link to={""} onClick={() => setSelectedCalling("info")}>
              Callings of Middle-earth
            </Link>
            <hr />
            {/* List of Callings */}
            {CALLINGS.map((calling) => (
              <>
                <Link key={calling.id} onClick={() => setSelectedCalling(calling.id)} to={""}>
                  {calling.name}
                </Link>
                <hr />
              </>
            ))}
          </aside>
          {/* Content */}
          <div className="content">
            <h1>Select your calling</h1>
            <hr />
            <div id="info">
              <CallingInfo calling={selectedCalling} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CallingPage;
