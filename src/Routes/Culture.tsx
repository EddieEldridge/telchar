import "../Assets/css/General.css";
import { Link } from "react-router-dom";
import { Culture } from "../Types/Culture";
import { useState } from "react";
import { Logo } from "../Components/Logo";
import CultureInfo from "../Components/CultureInfo";
import { DWARF } from "../Data/Cultures/Dwarf";
import { BARDING } from "../Data/Cultures/Barding";
import { ELF } from "../Data/Cultures/Elf";

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
            <Logo />
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
            <div id="info">
              <CultureInfo culture={selectedCulture} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CulturePage;
