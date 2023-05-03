import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: merriweather;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  @media (min-width: 550px) {
    font-size: 40px;
    margin-top: 48px;

    svg {
      width: 40.24px;
      height: 68px;
    }

    .navbar__links {
      font-size: 20px;
      align-items: center;
    }

    .logo {
      gap: 10px;
    }
  }
`;
export default HeaderStyled;
