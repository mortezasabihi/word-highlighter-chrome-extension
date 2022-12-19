import { createRoot } from "react-dom/client";
import { Header, Body } from "./components";
import "../assets/tailwind.css";

const Popup = (
  <div className="whir-flex whir-h-screen whir-select-none whir-flex-col">
    <Header />
    <Body />
  </div>
);

document
  .querySelector("body")
  .classList.add("whir-w-[400px]", "whir-h-[400px]");
const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Popup);
