import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  onClick: () => void;
}

const Item: React.FC<Props> = ({ onClick }) => {
  return (
    <li tabIndex={0} className="border-b border-stone-700">
      <div
        className="flex cursor-pointer items-center justify-between p-4"
        onClick={onClick}
      >
        <span className="truncate pr-2">
          https://developer.chrome.com/docs/extensions/reference/storage/examples/react/typescript
        </span>
        <ChevronRightIcon className="h-4 w-4 transition ease-in-out" />
      </div>
    </li>
  );
};

export default Item;
