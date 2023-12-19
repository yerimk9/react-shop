import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme.isDarkMode ? "#2a303c" : "")};
  }
  li {
    color: ${(props) => (props.theme.isDarkMode ? "" : "#1f2937")};
  }
`;

export default GlobalStyle;