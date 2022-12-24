import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  onClick: () => void;
}

const Item: React.FC<Props> = ({ onClick }) => {
  return (
    <li tabIndex={0} tw="border-b border-stone-700">
      <div
        tw="flex cursor-pointer items-center justify-between p-4"
        onClick={onClick}
      >
        <span tw="truncate pr-2">
          https://developer.chrome.com/docs/extensions/reference/storage/examples/react/typescript
        </span>
        <ChevronRightIcon tw="h-4 w-4 transition ease-in-out" />
      </div>
    </li>
  );
};

export default Item;
