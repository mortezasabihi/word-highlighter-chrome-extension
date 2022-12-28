import tw, { css } from "twin.macro";
import {
  PlusCircleIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

interface Props {
  x: number;
  y: number;
  onCopyClick: () => void;
  onHighlightClick: () => void;
}

const popoverStyles = css`
  ${tw`absolute bg-[#2B303C] border border-[#A6ADBA] z-[9999] flex gap-x-[8px] text-[16px] items-center whitespace-nowrap rounded-[4px] px-[8px] h-[36px] transition-all`}

  button {
    ${tw`p-[4px] text-white hover:text-[#3abff8]`}
  }

  svg {
    ${tw`w-[18px] h-[18px]`}
  }
`;

const Popover: React.FC<Props> = ({ x, y, onCopyClick, onHighlightClick }) => {
  return (
    <div css={popoverStyles} style={{ left: `${x}px`, top: `${y}px` }}>
      <button onClick={onHighlightClick} role="button" title="Highlight">
        <PlusCircleIcon />
      </button>
      <button onClick={onCopyClick} role="button" title="Copy to clipboard">
        <DocumentDuplicateIcon />
      </button>
    </div>
  );
};

export default Popover;
