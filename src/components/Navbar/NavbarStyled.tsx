import styled from "styled-components";

const NavbarStyled = styled.nav`
  .navbar__links {
    font-family: Poppins;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px}

    .active {
      border-bottom: 4px solid #ffa500;
    }
  }
`;
export default NavbarStyled;
