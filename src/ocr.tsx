import { recognizeText } from "expo-mlkit-ocr";
import * as ImagePicker from "expo-image-picker";

export async function pickAndRecognize() {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
  });

  if (result.canceled || !result.assets[0]) return;

  try {
    const recognition = await recognizeText(result.assets[0].uri);
    console.log("Recognized text:", JSON.stringify(recognition.text));
    console.log("Blocks:", JSON.stringify(recognition.blocks));
  } catch (error) {
    console.error("Recognition failed:", error);
  }
}
