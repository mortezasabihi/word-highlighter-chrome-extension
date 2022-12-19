import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  onClick: () => void;
}

const Item: React.FC<Props> = ({ onClick }) => {
  return (
    <li tabIndex={0} className="whir-border-b whir-border-stone-700">
      <div
        className="whir-flex whir-cursor-pointer whir-items-center whir-justify-between whir-p-4"
        onClick={onClick}
      >
        <span className="whir-truncate whir-pr-2">
          https://developer.chrome.com/docs/extensions/reference/storage/examples/react/typescript
        </span>
        <ChevronRightIcon className="whir-h-4 whir-w-4 whir-transition whir-ease-in-out" />
      </div>
    </li>
  );
};

export default Item;
