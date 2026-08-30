import { Directory, File, Paths } from "expo-file-system";
import { Asset } from "expo-asset";
import { loadLlamaModelInfo, initLlama } from "llama.rn";
import llmContextService from "./llmContext";
// export const getLLMInfo = async () => {
//   try {
//     const modelAsset = Asset.fromModule(
//       require("../../assets/models/qwen2.5-1.5b-instruct-q4_k_m.gguf"),
//     );

//     await modelAsset.downloadAsync();

//     if (!modelAsset.localUri) {
//       throw new Error("Model asset was not downloaded");
//     }

//     const modelFolder = new Directory(Paths.document, "models");

//     if (!modelFolder.exists) {
//       modelFolder.create();
//     }

//     const sourceFile = new File(modelAsset.localUri);

//     const destinationFile = new File(
//       modelFolder,
//       "qwen2.5-0.5b-instruct-q2_k.gguf",
//     );

//     if (!destinationFile.exists) {
//       sourceFile.copy(destinationFile);
//     }

//     const modelPath = destinationFile.uri;

//     await loadLlamaModelInfo(modelPath);

//     const context = await LoadLLM(modelPath);

//     return context;
//   } catch (error) {
//     console.error("[LLM] Model setup failed:", error);
//     throw error;
//   }
// };

export const getLLMInfo = async () => {
  try {
    const destinationFile = new File(Paths.document, "models/model.gguf");
    console.log(Paths);
    if (!destinationFile.exists) {
      throw new Error("Model not found — did you adb push it?");
    }

    const modelPath = destinationFile.uri;
    await loadLlamaModelInfo(modelPath);
    const context = await LoadLLM(modelPath);
    return context;
  } catch (error) {
    console.error("[LLM] Model setup failed:", error);
    throw error;
  }
};
export const LoadLLM = async (path: string) => {
  try {
    const context = await initLlama({
      model: path,
      use_mlock: true,
      n_ctx: 2048,
      n_gpu_layers: 99,
    });

    llmContextService.setLLMContext(context);

    return context;
  } catch (error) {
    console.log("[LLM] load llm error", error);
    throw error;
  }
};
export const analyzeDoc = async (context: any, extractText: string) => {
  try {
    //console.log("extractText", extractText);
    // const result = await context.completion({
    //   prompt: `Read the following documents and summerzie it with tags and category DOCUMENTS:${extractText} SUMMARY:`,
    // });
    const result = await context.completion({
      prompt: `
Extract information from the document.

Return ONLY this format:

SUMMARY: <2 short sentences>
CATEGORY: <one word>
TAGS: <exactly 3 short tags>
END

Rules:
- SUMMARY must contain exactly 2 short sentences.
- CATEGORY must be one word.
- TAGS must contain exactly 3 tags.
- Each tag must be 1-3 words.
- Use only information from the document.
- Never copy long sentences from the document.
- Do not explain anything.
- Stop after END.

DOCUMENT:
${extractText}

SUMMARY:
`,
      n_predict: 100,
      temperature: 0.1,
      top_k: 20,
      top_p: 0.9,
      repeat_penalty: 1.2,
      stop: ["END"],
    });

    console.log("RESULT:", result.text);
  } catch (error: any) {
    console.log("analyzeDoc error", error);
  }
};
