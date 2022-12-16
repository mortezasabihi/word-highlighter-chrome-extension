import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const Popup = (
  <div>
    <h1 className="text-5xl text-green-500">Hello World</h1>
    <img src="banner.png" alt="Banner" />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Popup);
