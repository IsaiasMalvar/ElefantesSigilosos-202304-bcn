import styled from "styled-components";

const ButtonStyled = styled.button`
  border-radius: 5px;
  width: 97px;
  height: 48px;
  background-color: #ffa500;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 550px) {
    width: 160px;
  }
`;
export default ButtonStyled;
