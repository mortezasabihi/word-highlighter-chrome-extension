import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import GlobalStyles from "../styles/GlobalStyles";
import { Popover } from "./Popover";
import { useCopyToClipboard } from "../hooks";

const ContentScript: React.FC = () => {
  const [xLines, setXLines] = useState(0);
  const [yLines, setYLines] = useState(0);
  const [selectedText, setSelectedText] = useState("");
  const [showPopover, setShowPopover] = useState(false);

  const [_, copy] = useCopyToClipboard();

  const hidePopover = () => setShowPopover(false);

  const onSelectText = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (!selectedText) {
      hidePopover();

      return;
    }

    const selectionRange = selection.getRangeAt(0);

    const startNode = selectionRange.startContainer.parentNode;
    const endNode = selectionRange.endContainer.parentNode;

    const highlightable = window.document;

    if (
      !highlightable.contains(startNode) ||
      !highlightable.contains(endNode)
    ) {
      hidePopover();

      return;
    }

    if (!startNode.isSameNode(endNode)) {
      hidePopover();

      return;
    }

    const { x, y, width } = selectionRange.getBoundingClientRect();
    if (!width) {
      hidePopover();

      return;
    }

    setXLines(x + width / 10);
    setYLines(y + window.scrollY - 40);
    setSelectedText(selectedText);
    setShowPopover(true);
  };

  useEffect(() => {
    window.addEventListener("mouseup", onSelectText);

    return () => window.removeEventListener("mouseup", onSelectText);
  }, []);

  const onCopyText = async () => {
    await copy(selectedText);
    hidePopover();
  };

  const onHighlight = () => {
    const isHighlighted = !!selectedText && showPopover;

    if (isHighlighted) {
      const selection = window.getSelection();
      const selectionRange = selection.getRangeAt(0);
      const mark = document.createElement("mark");

      mark.textContent = selection.toString();
      mark.dataset.highlightId = nanoid();
      mark.classList.add("highlight");

      selectionRange.deleteContents();
      selectionRange.insertNode(mark);

      hidePopover();
    }
  };

  return (
    <>
      <GlobalStyles />
      {showPopover && (
        <Popover
          x={xLines}
          y={yLines}
          onCopyClick={onCopyText}
          onHighlightClick={onHighlight}
        />
      )}
    </>
  );
};

export default ContentScript;
