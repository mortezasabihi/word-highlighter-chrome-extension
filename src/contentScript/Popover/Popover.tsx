import tw, { css } from "twin.macro";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  x: number;
  y: number;
}

const popoverStyles = css`
  ${tw`absolute bg-blue-500 z-[9999] flex max-h-8 max-w-[fit-content] items-center whitespace-nowrap rounded p-2 text-white transition-all`}

  svg {
    ${tw`h-3 w-3`}
  }

  button {
    ${tw`absolute rounded-full bg-red-500 p-0.5 -right-1.5 -top-1.5`}
  }
`;

const Popover: React.FC<Props> = ({ x, y }) => {
  return (
    <div css={popoverStyles} style={{ left: `${x}px`, top: `${y}px` }}>
      <button>
        <XMarkIcon />
      </button>

      <span>inbox</span>
    </div>
  );
};

export default Popover;
