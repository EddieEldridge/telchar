import { NavLink } from "react-router-dom";
import "../Assets/css/General.css";
import rpLogo from "../Assets/images/lotr_logo.png";
import foundryLogo from "../Assets/images/foundry_logo.png";

function Home() {
  return (
    <>
      <main className="background">
        {/* Content */}
        <div className="content homepage">
          {/* <h1>The Lord of the Rings™ Roleplaying</h1> */}
          <img src={rpLogo} width={"50%"}></img>
          <h3>Create fantastic new characters ready for import into FoundryVTT</h3>
          <img src={foundryLogo} height={"10%"}></img>
          <br />
          <br />
          <NavLink to="/culture">
            <button>Enter</button>
          </NavLink>
        </div>
      </main>
      <div></div>
    </>
  );
}

export default Home;
