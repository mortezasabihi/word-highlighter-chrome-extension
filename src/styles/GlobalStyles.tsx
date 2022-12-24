import tw, { GlobalStyles as BaseStyles } from "twin.macro";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global />
  </>
);

export default GlobalStyles;
