import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default GlobalStyle;
