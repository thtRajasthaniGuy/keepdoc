import { createMMKV } from "react-native-mmkv";

export const storage = createMMKV();

export const setMMKV = (key: string, value: boolean | string | number) => {
  storage.set(key, JSON.stringify(value));
};

export const getMMKV = (key: string) => {
  const raw = storage.getString(key);
  return raw !== undefined ? JSON.parse(raw) : undefined;
};
