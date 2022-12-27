import { useEffect, useState } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { Popover } from "./Popover";

const ContentScript: React.FC = () => {
  const [xLines, setXLines] = useState(0);
  const [yLines, setYLines] = useState(0);
  const [selectedText, setSelectedText] = useState("");
  const [showPopover, setShowPopover] = useState(false);

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
    setYLines(y + window.scrollY - 34);
    setSelectedText(selectedText);
    setShowPopover(true);
  };

  useEffect(() => {
    window.addEventListener("mouseup", onSelectText);

    return () => window.removeEventListener("mouseup", onSelectText);
  });

  return (
    <>
      <GlobalStyles />
      {showPopover && <Popover x={xLines} y={yLines} />}
    </>
  );
};

export default ContentScript;
