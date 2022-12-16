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
    <div className="navbar bg-base-100 px-4">
      <div className="flex-1">
        <h1
          className={`text-xl normal-case ${
            active ? "text-info" : "text-neutral-content"
          }`}
        >
          Word Highlighter
        </h1>
      </div>
      <div className="flex-none">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-3">Active</span>
            <input
              type="checkbox"
              className="toggle-info toggle"
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
