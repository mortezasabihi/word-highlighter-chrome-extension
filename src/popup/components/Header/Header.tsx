import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fetchActive = async () => {
      const result = await chrome.storage.local.get(["isActive"]);
      setActive(result.isActive);
    };

    fetchActive();
  }, []);

  const handleOnChange = async ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    await chrome.storage.local.set({ isActive: checked });
    setActive(checked);
  };

  return (
    <div className="whir-navbar whir-bg-base-100 whir-px-4">
      <div className="whir-flex-1">
        <h1
          className={`whir-text-xl whir-normal-case ${
            active ? "whir-text-info" : "whir-text-neutral-content"
          }`}
        >
          Word Highlighter
        </h1>
      </div>
      <div className="whir-flex-none">
        <div className="whir-form-control">
          <label className="whir-label whir-cursor-pointer">
            <span className="whir-label-text whir-mr-3">Active</span>
            <input
              type="checkbox"
              className="whir-toggle-info whir-toggle"
              onChange={handleOnChange}
              checked={active}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
