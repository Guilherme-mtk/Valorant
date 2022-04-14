import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box;
    list-style: none;
    body {
    margin: 0;
 
    }
  }
`;

export default GlobalStyle;
