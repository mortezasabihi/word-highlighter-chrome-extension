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
      className={`whir-fixed whir-inset-0 whir-z-10 whir-h-full whir-w-full whir-bg-base-300 whir-transition whir-duration-300 whir-ease-in-out ${
        isOpen ? "whir-translate-x-0" : "whir-translate-x-full"
      }`}
    >
      <div className="whir-flex whir-h-full whir-flex-col whir-gap-y-4 whir-p-4">
        <div className="whir-flex whir-items-center whir-justify-between">
          <button
            className="whir-btn-square whir-btn-sm whir-btn"
            onClick={onClose}
          >
            <ChevronLeftIcon className="whir-h-4 whir-w-4" />
          </button>

          <span
            className="whir-truncate whir-pl-2 whir-font-semibold"
            title="https://developer.chrome.com/docs/extensions/reference/storage/examples/react/typescript"
          >
            https://developer.chrome.com/docs/extensions/reference/storage/examples/react/typescript
          </span>
        </div>

        <div className="whir-flex whir-min-h-[calc(100%-48px)] whir-flex-col whir-overflow-y-auto whir-rounded-md whir-bg-base-100 whir-p-2">
          {highlights.map((highlight, index) => (
            <span
              key={index}
              className="whir-mb-2 whir-w-[fit-content] whir-cursor-pointer whir-rounded whir-border whir-border-dashed whir-border-neutral-content whir-bg-base-300 whir-py-1 whir-px-2 whir-transition whir-ease-in-out hover:whir-bg-info hover:whir-text-primary-content"
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
