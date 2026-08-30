import { extractText } from "expo-pdf-text-extract";

export const docParser = async (uri: string) => {
  const text = await extractText(uri);
  return text;
};
