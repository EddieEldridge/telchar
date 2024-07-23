import "../Assets/css/App.css";
import "../Assets/css/Culture.css";
import { Collapse } from "antd";
import CULTURE_DROPDOWNS from "../Components/Cultures";

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
