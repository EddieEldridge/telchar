import { NavLink } from "react-router-dom";
import lotrLogo from "../Assets/images/logo.png";

export const Logo = () => {
  return (
    <NavLink to={"/"}>
      <img src={lotrLogo} className="logo" />
    </NavLink>
  );
};
