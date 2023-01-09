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
  const [editMode, setEditMode] = useState(false);
  const [selectedHighlight, setSelectedHighlight] = useState("");

  const [_, copy] = useCopyToClipboard();

  const hidePopover = () => setShowPopover(false);

  const onSelectText = (e: MouseEvent) => {
    const targetElement = e.target as HTMLDivElement;
    if (targetElement.id === "word-highlighter-chrome-extension") return;

    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    setEditMode(false);

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

    setXLines(x + width / 2);
    setYLines(y + window.scrollY - 10);
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
    window.getSelection().removeAllRanges();
  };

  const onHighlight = () => {
    const isHighlighted = !!selectedText && showPopover;

    if (isHighlighted) {
      const selection = window.getSelection();
      const selectionRange = selection.getRangeAt(0);
      const mark = document.createElement("mark");
      const id = nanoid();

      mark.textContent = selection.toString();
      mark.dataset.highlightId = id;
      mark.classList.add("highlight");

      selectionRange.deleteContents();
      selectionRange.insertNode(mark);

      hidePopover();

      const element = document.querySelector(
        `mark.highlight[data-highlight-id="${id}"]`
      );

      element.addEventListener("mouseover", () => onMouseOver(element, id));
    }
  };

  const onMouseOver = (element: Element, id: string) => {
    const { x, y, width } = element.getBoundingClientRect();

    setSelectedText(element.innerHTML.trim());
    setXLines(x + width / 2);
    setYLines(y + window.scrollY - 5);
    setShowPopover(true);
    setEditMode(true);
    setSelectedHighlight(id);
  };

  const onDelete = () => {
    const id = selectedHighlight;
    const element = document.querySelector(
      `mark.highlight[data-highlight-id="${id}"]`
    );
    const parent = element.parentElement;
    const textNode = document.createTextNode(element.innerHTML);

    parent.replaceChild(textNode, element);

    hidePopover();

    element.removeEventListener("mouseover", () => onMouseOver(element, id));
  };

  return (
    <>
      <GlobalStyles />
      {showPopover && (
        <Popover
          x={xLines}
          y={yLines}
          editMode={editMode}
          onCopyClick={onCopyText}
          onHighlightClick={onHighlight}
          onDeleteClick={onDelete}
        />
      )}
    </>
  );
};

export default ContentScript;
