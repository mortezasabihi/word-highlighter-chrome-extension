import tw from "twin.macro";
import { useChromeStorage } from "../../../hooks";

const Header: React.FC = () => {
  const [active, setActive] = useChromeStorage("isActive", false);

  const handleOnChange = async ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setActive(checked);
  };

  return (
    <div tw="navbar bg-base-100 px-4">
      <div tw="flex-1">
        <h1
          css={[
            tw`text-xl normal-case`,
            active ? tw`text-info` : tw`text-neutral-content`,
          ]}
        >
          Word Highlighter
        </h1>
      </div>
      <div tw="flex-none">
        <div tw="form-control">
          <label tw="label cursor-pointer">
            <span tw="label-text mr-3">Active</span>
            <input
              type="checkbox"
              tw="toggle-info toggle"
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
