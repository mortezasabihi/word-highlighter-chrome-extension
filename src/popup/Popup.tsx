import { createRoot } from "react-dom/client";
import { Header } from "./components";
import "../assets/tailwind.css";

const Popup = (
  <div>
    <Header />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Popup);
