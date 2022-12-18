import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const highlights = [
  "throttling limits",
  "Using fit-content for box sizing",
  "When used as laid out box size for width, height, min-width, min-height, max-width and max-height the maximum and minimum sizes refer to the content size.",
  "but never more than max-content",
  "Specifications",
  "throttling limits",
  "Using fit-content for box sizing",
  "When used as laid out box size for width, height, min-width, min-height, max-width and max-height the maximum and minimum sizes refer to the content size.",
  "but never more than max-content",
  "Specifications",
];

const Content: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-10 h-full w-full bg-base-300 transition duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col gap-y-4 p-4">
        <div className="flex items-center justify-between">
          <button className="btn-square btn-sm btn" onClick={onClose}>
            <ChevronLeftIcon className="h-4 w-4" />
          </button>

          <span
            className="truncate pl-2 font-semibold"
            title="https://developer.chrome.com/docs/extensions/reference/storage/examples/react/typescript"
          >
            https://developer.chrome.com/docs/extensions/reference/storage/examples/react/typescript
          </span>
        </div>

        <div className="flex min-h-[calc(100%-48px)] flex-col overflow-y-auto rounded-md bg-base-100 p-2">
          {highlights.map((highlight, index) => (
            <span
              key={index}
              className="mb-2 w-[fit-content] cursor-pointer rounded border border-dashed border-neutral-content bg-base-300 py-1 px-2 transition ease-in-out hover:bg-info hover:text-primary-content"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
