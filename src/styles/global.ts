import { createGlobalStyle } from "styled-components";

interface DefaultTheme {
  theme: {
    title: string;
    colors: {
      primary: string;
      header: string;
      background: string;
      text: string;
    };
  };
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props: DefaultTheme) => props.theme.colors.background};
    --webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
  }

  body, div {
    transition: background 0.5s ease;
  }

  button {
    cursor: pointer;
  }
`;
