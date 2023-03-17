import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root{
    --color-main : #2C2C47;
    --color-white : #ffffff;
    --color-sub : #ffa800;
    --color-black : #e6e6ea;
    --color-font : #444444;
    --color-grayA6 : #a6a6a6;
    --color-background : #E6E6EA;
    --color-grayB3 : #B3B3B3;
    --color-border : #6A6A8C;
    
    --font-size-12 : 12px;
    --font-size-14 : 14px;
    --font-size-18 : 18px;
    --font-size-20 : 20px;
    --font-size-22 : 22px;
    --font-size-24 : 24px;
  }

`;

export default GlobalStyle;
