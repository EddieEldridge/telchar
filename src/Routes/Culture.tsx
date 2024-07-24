import "../Assets/css/General.css";
import "../Assets/css/Culture.css";
import { Link, NavLink } from "react-router-dom";
import { BARDING } from "../Data/Cultures/Barding";
import { DWARF } from "../Data/Cultures/Dwarf";
import { ELF } from "../Data/Cultures/Elf";
import { Culture } from "../Types/Culture";
import CultureInfo from "../Components/CultureInfo";
import { useState } from "react";
import lotrLogo from "../Assets/images/logo.png";

export const CULTURES: Culture[] = [];
CULTURES.push(BARDING);
CULTURES.push(DWARF);
CULTURES.push(ELF);

function CulturePage() {
  const [selectedCulture, setSelectedCulture] = useState(CULTURES[0].id);

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
            <Link to={""} onClick={() => setSelectedCulture("info")}>
              Cultures of Middle-earth
            </Link>
            <hr />
            {/* List of cultures */}
            {CULTURES.map((culture) => (
              <>
                <Link key={culture.id} onClick={() => setSelectedCulture(culture.id)} to={""}>
                  {culture.name}
                </Link>
                <hr />
              </>
            ))}
          </aside>
          {/* Content */}
          <div className="content">
            <h1>Select your culture</h1>
            <hr />
            <div id="cultureInfo">
              <CultureInfo culture={selectedCulture} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CulturePage;
