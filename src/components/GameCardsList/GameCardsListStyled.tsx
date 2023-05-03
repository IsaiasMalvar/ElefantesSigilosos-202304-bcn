import styled from "styled-components";

const GameCardsListStyled = styled.ul`
  display: grid;
  grid: 1fr;
  row-gap: 50px;
  column-gap: 50px;
  padding-top: 50px;

  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default GameCardsListStyled;
