import { Item } from "./Item";
import { Content } from "./Content";
import { useState } from "react";

const Body: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`whir-relative whir-flex-1 whir-bg-base-300 ${
        open
          ? "whir-overflow-hidden"
          : "whir-overflow-y-auto whir-overflow-x-hidden"
      }`}
    >
      <ul className="whir-h-full whir-w-full">
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
