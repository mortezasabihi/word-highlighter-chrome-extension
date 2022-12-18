import { createRoot } from "react-dom/client";
import { Header, Body } from "./components";
import "../assets/tailwind.css";

const Popup = (
  <div className="flex h-screen select-none flex-col">
    <Header />
    <Body />
  </div>
);

document.querySelector("body").classList.add("w-[400px]", "h-[400px]");
const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Popup);
