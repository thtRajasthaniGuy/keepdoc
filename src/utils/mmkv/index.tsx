import { createMMKV } from "react-native-mmkv";

export const storage = createMMKV();

export const setMMKV = async (
  key: string,
  value: boolean | string | number,
) => {
  await storage.set(key, value);
};

export const getMMKV = async (key: string) => {
  return await storage.getString(key);
};
