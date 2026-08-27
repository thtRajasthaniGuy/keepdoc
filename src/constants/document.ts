import Ionicons from "@react-native-vector-icons/ionicons";

export type IoniconName = React.ComponentProps<typeof Ionicons>["name"];
interface DocumentCardStyle {
  document: DocumentStyle;
  status: DocumentStatusStyle;
}
export enum DocumentStatus {
  Ready = "Ready",
  Processing = "Processing",
}

export enum DocumentType {
  Medical = "MEDICAL",
  Identity = "IDENTITY",
  Financial = "FINANCIAL",
  Legal = "LEGAL",
  Education = "EDUCATION",
  Insurance = "INSURANCE",
  Receipt = "RECEIPT",
  Bill = "BILL",
  Other = "OTHER",
}

interface DocumentStyle {
  icon: IoniconName;
  color: string;
}
interface DocumentStatusStyle {
  icon: IoniconName;
  color: string;
}

const documentStyles: Record<DocumentType, DocumentStyle> = {
  [DocumentType.Medical]: {
    icon: "medkit-outline",
    color: "#E11D48",
  },

  [DocumentType.Identity]: {
    icon: "card-outline",
    color: "#2563EB",
  },

  [DocumentType.Financial]: {
    icon: "cash-outline",
    color: "#16A34A",
  },

  [DocumentType.Legal]: {
    icon: "briefcase-outline",
    color: "#7C3AED",
  },

  [DocumentType.Education]: {
    icon: "school-outline",
    color: "#EA580C",
  },

  [DocumentType.Insurance]: {
    icon: "shield-checkmark-outline",
    color: "#0891B2",
  },

  [DocumentType.Receipt]: {
    icon: "receipt-outline",
    color: "#DB2777",
  },

  [DocumentType.Bill]: {
    icon: "document-text-outline",
    color: "#CA8A04",
  },

  [DocumentType.Other]: {
    icon: "document-outline",
    color: "#64748B",
  },
};

const documentStatusIcons: Record<DocumentStatus, DocumentStatusStyle> = {
  [DocumentStatus.Ready]: {
    icon: "checkmark-circle-outline",
    color: "#16A34A",
  },

  [DocumentStatus.Processing]: {
    icon: "sync-outline",
    color: "#D97706",
  },
};
export const getDocumentStyle = (
  docType?: string,
  status?: string,
): DocumentCardStyle => {
  const documentStyle =
    documentStyles[docType as DocumentType] ??
    documentStyles[DocumentType.Other];

  const statusStyle = documentStatusIcons[status as DocumentStatus] ?? {
    icon: "help-circle-outline",
    color: "#64748B",
  };

  return {
    document: documentStyle,
    status: statusStyle,
  };
};
