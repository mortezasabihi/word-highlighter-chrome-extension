import { GlobalStyles as BaseStyles } from "twin.macro";
import { createGlobalStyle } from "styled-components";
import "@fontsource/open-sans";

const Global = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global />
  </>
);

export default GlobalStyles;
