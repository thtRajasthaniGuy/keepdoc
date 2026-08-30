class ContextService {
  private llmContext: any | null = null;

  private contextPromise: Promise<any> | null = null;

  setLLMContext(context: any) {
    this.llmContext = context;
  }

  async getLLMContext(): Promise<any> {
    if (this.llmContext) {
      return this.llmContext;
    }

    if (this.contextPromise) {
      return this.contextPromise;
    }

    this.contextPromise = this.initializeLLM();

    try {
      const context = await this.contextPromise;

      return context;
    } catch (error) {
      this.contextPromise = null;

      throw error;
    }
  }

  private async initializeLLM() {
    const { getLLMInfo } = await import("./index");

    const context: any = await getLLMInfo();

    if (!context) {
      throw new Error("LLM initialization failed");
    }

    return context;
  }
}

const llmContextService = new ContextService();

export default llmContextService;
