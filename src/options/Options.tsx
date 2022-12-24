import { createRoot } from "react-dom/client";
import GlobalStyles from "../styles/GlobalStyles";

const Options = (
  <>
    <GlobalStyles />
    <div>
      <h1 className="text-5xl text-green-500">Hello World</h1>
    </div>
  </>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Options);
