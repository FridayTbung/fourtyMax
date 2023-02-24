import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root{
    --color-main : #2C2C47;
    --color-white : #ffffff;
    --color-sub : #ffa800
    --color-back : #e6e6ea;
    --color-font : #44444;

  }

`;

export default GlobalStyle;
