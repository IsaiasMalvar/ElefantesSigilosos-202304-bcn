import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled>
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/edit">Edit</NavLink>
          </li>
        </ul>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
