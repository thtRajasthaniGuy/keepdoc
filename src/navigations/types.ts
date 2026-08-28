import { AppDocument, DocumentDetails } from "../constants/document";

export type RootStackParamList = {
  Onboarding: undefined;
  Main: undefined;
  UploadDoc: {
    uri: string;
    name: string | null | undefined;
    mimeType: string | null | undefined;
    size: number | null | undefined;
  };
  DocumentDetails: {
    DocumentDetails: { document: AppDocument };
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
