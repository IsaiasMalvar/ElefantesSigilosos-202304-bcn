import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  .navbar__links {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
  }

  .active {
    border-bottom: 4px solid ${(props) => props.theme.colors.secondary};
  }
`;
export default NavbarStyled;
