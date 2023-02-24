import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
