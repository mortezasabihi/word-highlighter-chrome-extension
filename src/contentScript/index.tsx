import { createRoot } from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import ContentScript from "./ContentScript";

function init() {
  const appContainer = document.createElement("div");
  appContainer.setAttribute("id", "word-highlighter-chrome-extension");
  document.body.appendChild(appContainer);

  const shadow = appContainer.attachShadow({ mode: "open" });
  const renderIn = document.createElement("div");
  shadow.appendChild(renderIn);
  const root = createRoot(renderIn);

  root.render(
    <StyleSheetManager target={renderIn}>
      <ContentScript />
    </StyleSheetManager>
  );
}

init();
