import styled from "styled-components";

const GameCardStyled = styled.article`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.dark};
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  .gamecard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      font-family: ${(props) => props.theme.fonts.secondary};
      font-weight: 700;
      font-size: 18px;
    }
  }

  .gamecard-type {
    margin-bottom: 10px;
  }

  .gamecard-image {
    align-self: center;
  }
`;

export default GameCardStyled;
