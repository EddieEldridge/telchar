import { NavLink } from "react-router-dom";
import "../css/App.css";
import "../css/Culture.css";
import { Button, Collapse } from "antd";
import CULTURE_DROPDOWNS from "../components/Cultures";
// import CULTURES from "../data/Cultures";

function Culture() {
  return (
    <>
      <div id="cultureDropdown">
        <h1>Select your culture</h1>
        <Collapse accordion={true} items={CULTURE_DROPDOWNS}></Collapse>
      </div>
    </>
  );
}

export default Culture;
