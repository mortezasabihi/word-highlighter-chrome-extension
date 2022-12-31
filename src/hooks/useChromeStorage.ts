import { useState, useEffect } from "react";

const useChromeStorage = (key: string, initialValue: any) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const fetchStorage = async () => {
      const result = await chrome.storage.local.get(key);
      setState(result[key]);
    };

    fetchStorage();
  }, []);

  const setValue = async (value: any) => {
    await chrome.storage.local.set({ [key]: value });
    setState(value);
  };

  return [state, setValue];
};

export default useChromeStorage;
