import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <p>
          S8 AQI Project{" "}
          <span className="material-symbols-outlined">mode_fan</span>
        </p>

        <div className="header-inner-right">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/search"}>Search</NavLink>
            </li>
            <li>
              <NavLink to={"/calculator"}>Calculator</NavLink>
            </li>
            <li>
              <NavLink to={"/team"}>Meet Our Team</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-temp"></div>
    </div>
  );
};

export default Header;
