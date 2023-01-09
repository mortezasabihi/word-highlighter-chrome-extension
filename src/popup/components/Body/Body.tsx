import { useState } from "react";
import tw from "twin.macro";
import { Item } from "./Item";
import { Content } from "./Content";

const Body: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      css={[
        tw`relative flex-1 bg-base-300`,
        open ? tw`overflow-hidden` : tw`overflow-y-auto overflow-x-hidden`,
      ]}
    >
      <ul tw="h-full w-full">
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
