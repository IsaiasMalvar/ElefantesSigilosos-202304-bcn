import styled from "styled-components";

const GameCardStyled = styled.article`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.dark};
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: 5px;
  gap: 10px;

  .gamecard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    &__title {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-weight: 700;
      font-size: 18px;
    }
  }

  .gamecard-type {
    display: block;
    padding-bottom: 20px;
  }

  .gamecard-image {
    align-self: center;
    height: auto;
  }

  .gamecard-link {
    display: block;
    text-align: center;
  }
`;

export default GameCardStyled;
