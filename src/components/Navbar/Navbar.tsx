import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled>
      <ul className="navbar__links">
        <li>
          <NavLink to="/cards">Cards</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
