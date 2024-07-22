import { NavLink } from "react-router-dom";
import lotrLogo from "../assets/images/logo.png";
import "../css/App.css";

function Home() {
  return (
    <>
      <div>
        <a
          href="https://freeleaguepublishing.com/games/the-lord-of-the-rings-roleplaying/"
          target="_blank"
        >
          <img src={lotrLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>The Lord of the Rings™ Roleplaying</h1>
      <h3>Create fantastic new characters ready for import into FoundryVTT</h3>
      <NavLink to="/culture">
        <button>Create my character</button>
      </NavLink>
    </>
  );
}

export default Home;
