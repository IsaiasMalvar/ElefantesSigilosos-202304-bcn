import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font : inherit;
    background-color: #433550;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  input {
    font-family: inherit;
    border: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
  }

  img{
    max-width: 100%;
  }


`;

export default GlobalStyle;
