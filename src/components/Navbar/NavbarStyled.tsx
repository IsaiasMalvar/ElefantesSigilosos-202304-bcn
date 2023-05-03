import styled from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  .navbar__links {
    font-family: Poppins;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
  }

  .active {
    border-bottom: 4px solid #ffa500;
  }

  @media (min-width: 1024px) {
  }
`;
export default NavbarStyled;
