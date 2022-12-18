import { Item } from "./Item";
import { Content } from "./Content";
import { useState } from "react";

const Body: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative flex-1 bg-base-300 ${
        open ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden"
      }`}
    >
      <ul className="h-full w-full">
        <Item onClick={() => setOpen(true)} />
        <Item onClick={() => setOpen(true)} />
        <Item onClick={() => setOpen(true)} />
        <Item onClick={() => setOpen(true)} />
        <Item onClick={() => setOpen(true)} />
        <Item onClick={() => setOpen(true)} />
        <Item onClick={() => setOpen(true)} />
        <Item onClick={() => setOpen(true)} />
        <Item onClick={() => setOpen(true)} />
      </ul>

      <Content isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Body;
