import { createRoot } from "react-dom/client";
import tw from "twin.macro";
import { createGlobalStyle } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import { Header, Body } from "./components";

const Global = createGlobalStyle`
  body {
    ${tw`w-[400px]`};
    ${tw`h-[400px]`};
  }
`;

const Popup = (
  <>
    <GlobalStyles />
    <Global />
    <div tw="flex h-screen select-none flex-col">
      <Header />
      <Body />
    </div>
  </>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Popup);
