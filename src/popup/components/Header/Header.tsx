import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    chrome.storage.local.set({ active });
  }, [active]);

  return (
    <div className="navbar bg-base-100 px-4">
      <div className="flex-1">
        <h1 className="text-xl normal-case">Word Highlighter</h1>
      </div>
      <div className="flex-none">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-3">Active</span>
            <input
              type="checkbox"
              className="toggle-info toggle"
              onChange={(e) => setActive(e.target.checked)}
              defaultChecked={active}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
