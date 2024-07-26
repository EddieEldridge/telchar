import "../Assets/css/General.css";
import { Link, redirect } from "react-router-dom";
import CallingInfo from "../CallingInfo";
import { useContext, useState } from "react";
import { Calling } from "../Types/Calling";
import { CAPTAIN } from "../Callings/Captain";
import { CharacterContext } from "../Main";
import { Logo } from "../Logo";

export const CALLINGS: Calling[] = [];
CALLINGS.push(CAPTAIN);

function CallingPage() {
  const [selectedCalling, setSelectedCalling] = useState(CALLINGS[0].id);
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
            <Logo />
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
