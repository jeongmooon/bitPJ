import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size : 10px;
  }
  body {
    padding-top : 6rem;
  }
  
  strong{
    font-weight: bolder;
  }
  em{
    font-style: italic;
  }
  .toast {
  color: #ffffff !important;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 22px;
  height: 20px;
  width: 20rem;
  padding: 1rem;
  min-height: 2rem !important;
  display: flex;
  justify-content: center;
  border-radius: 8px !important;
}
`;

export default GlobalStyle;