import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F2F2F2;
    --webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;