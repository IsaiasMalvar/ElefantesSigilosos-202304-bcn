import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./HeaderStyled";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <div className="logo">
        <span>Spellify</span>
        <LogoIcon />
      </div>
      <Navbar />
    </HeaderStyled>
  );
};

export default Header;
