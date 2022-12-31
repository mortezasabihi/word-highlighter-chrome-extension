import tw, { css } from "twin.macro";
import {
  PlusCircleIcon,
  DocumentDuplicateIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

interface Props {
  x: number;
  y: number;
  editMode: boolean;
  onCopyClick: () => void;
  onHighlightClick: () => void;
  onDeleteClick: () => void;
}

const popoverStyles = css`
  ${tw`shadow-[0_0_5px_5px_rgba(217,38,169,0.6)] after:absolute after:content-[''] after:left-1/2 after:-bottom-[5px] after:border-solid after:border-t-[#333] after:border-l-transparent after:border-r-transparent after:border-l-[6px] after:border-r-[6px] after:border-t-[6px] after:-translate-x-1/2 after:w-0 after:h-0 absolute bg-[#2B303C] z-[9999] flex gap-x-[8px] text-[16px] items-center whitespace-nowrap rounded-[4px] px-[8px] h-[36px] transition-all transform -translate-x-1/2 -translate-y-full`}
  direction: ltr;

  button {
    ${tw`p-[4px] text-white hover:text-[#3abff8]`}
  }

  svg {
    ${tw`w-[18px] h-[18px]`}
  }
`;

const Popover: React.FC<Props> = ({
  x,
  y,
  editMode,
  onCopyClick,
  onHighlightClick,
  onDeleteClick,
}) => {
  return (
    <div css={popoverStyles} style={{ left: `${x}px`, top: `${y}px` }}>
      {editMode ? (
        <button onClick={onDeleteClick} role="button" title="Delete">
          <TrashIcon />
        </button>
      ) : (
        <button onClick={onHighlightClick} role="button" title="Highlight">
          <PlusCircleIcon />
        </button>
      )}
      <button onClick={onCopyClick} role="button" title="Copy to Clipboard">
        <DocumentDuplicateIcon />
      </button>
    </div>
  );
};

export default Popover;
