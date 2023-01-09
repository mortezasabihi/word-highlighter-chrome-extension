import { createRoot } from "react-dom/client";
import { StyleSheetManager } from "styled-components";
import ContentScript from "./ContentScript";

function init() {
  const style = document.createElement("style");
  style.textContent = `
    mark.highlight[data-highlight-id] {
      all: unset;
      user-select: none;
      position: relative;
      color: white;
      cursor: pointer;
      background-image: linear-gradient(to right, #D926A9, #6425E6);
      border-radius: 6px;
      padding: 3px 0px;
    }
  `;
  document.head.appendChild(style);

  const appContainer = document.createElement("div");
  appContainer.setAttribute("id", "word-highlighter-chrome-extension");
  document.body.appendChild(appContainer);

  const shadow = appContainer.attachShadow({ mode: "open" });
  shadow.innerHTML = `
    <style>
      :host {
        all: unset;
        font-family: "Open Sans", sans-serif!important;
      }
    </style>
  `;
  const renderIn = document.createElement("div");
  shadow.appendChild(renderIn);
  const root = createRoot(renderIn);

  root.render(
    <StyleSheetManager target={shadow}>
      <ContentScript />
    </StyleSheetManager>
  );
}

init();
