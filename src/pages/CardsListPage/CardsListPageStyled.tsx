import styled from "styled-components";

const CardsListPageStyled = styled.div`
  padding-top: 50px;

  .cards-intro {
    text-align: center;
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: 700;
    font-size: 24px;
  }
`;

export default CardsListPageStyled;
