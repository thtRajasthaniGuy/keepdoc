import { View, Text } from "react-native";
import { Header } from "../../components/header";
import { Search } from "../../components/search/search";
import { useTheme } from "../../theme/ThemeProvider";
import { DashboardStyles } from "./styles";
import { DocCard } from "../../components/docCard";
import { FlashList } from "@shopify/flash-list";
import { EmptyDocuments } from "../../components/empty-doc-list";
import { FloatingActionButton } from "../../components/floating-action-button";
import { useEffect, useState, useCallback } from "react";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { navigateTo } from "../../navigations/navigation";
import type { AppDocument } from "../../constants/document";

type NavigationProp = NativeStackNavigationProp<any>;
import { DocumentType, DocumentStatus } from "../../constants/document";
import Toast from "react-native-toast-message";
const dummyDocs: AppDocument[] = [
  // Medical
  {
    id: "doc-001",
    imageUri: "https://.../blood-test.jpg",
    category: DocumentType.Medical,
    title: "Blood Test Report",
    description: "Routine blood work panel from your last checkup.",
    status: DocumentStatus.Ready,
    date: "2026-08-27T15:30:00.000Z",
    fields: [
      {
        icon: "calendar-outline",
        label: "Test Date",
        value: "Aug 27, 2026",
      },
      {
        icon: "medkit-outline",
        label: "Lab",
        value: "City Diagnostics",
      },
    ],
  },
  {
    id: "doc-002",
    imageUri: "https://.../prescription.jpg",
    category: DocumentType.Medical,
    title: "Doctor Prescription",
    description: "Prescription issued during your recent doctor visit.",
    status: DocumentStatus.Ready,
    date: "2026-08-22T11:20:00.000Z",
    fields: [
      {
        icon: "person-outline",
        label: "Doctor",
        value: "Dr. Amit Sharma",
      },
      {
        icon: "calendar-outline",
        label: "Visit Date",
        value: "Aug 22, 2026",
      },
    ],
  },

  // Identity
  {
    id: "doc-003",
    imageUri: "https://.../aadhaar.jpg",
    category: DocumentType.Identity,
    title: "Aadhaar Card",
    description: "Government-issued identity document.",
    status: DocumentStatus.Ready,
    date: "2026-08-26T10:15:00.000Z",
    fields: [
      {
        icon: "person-outline",
        label: "Name",
        value: "Deepa Sharma",
      },
      {
        icon: "finger-print-outline",
        label: "Aadhaar Number",
        value: "XXXX XXXX 4821",
      },
    ],
  },
  {
    id: "doc-004",
    imageUri: "https://.../passport.jpg",
    category: DocumentType.Identity,
    title: "Passport",
    description: "Indian passport containing personal identification details.",
    status: DocumentStatus.Ready,
    date: "2026-08-18T09:45:00.000Z",
    fields: [
      {
        icon: "person-outline",
        label: "Name",
        value: "Deepa Sharma",
      },
      {
        icon: "calendar-outline",
        label: "Expiry",
        value: "May 18, 2034",
      },
    ],
  },

  // Financial
  {
    id: "doc-005",
    imageUri: "https://.../bank-statement.jpg",
    category: DocumentType.Financial,
    title: "Bank Statement",
    description: "Monthly account statement for August 2026.",
    status: DocumentStatus.Ready,
    date: "2026-08-24T08:45:00.000Z",
    fields: [
      {
        icon: "business-outline",
        label: "Bank",
        value: "AU Small Finance Bank",
      },
      {
        icon: "calendar-outline",
        label: "Period",
        value: "Aug 2026",
      },
    ],
  },
  {
    id: "doc-006",
    imageUri: "https://.../salary-slip.jpg",
    category: DocumentType.Financial,
    title: "Salary Slip August 2026",
    description: "Monthly salary statement and earnings breakdown.",
    status: DocumentStatus.Ready,
    date: "2026-08-01T07:30:00.000Z",
    fields: [
      {
        icon: "briefcase-outline",
        label: "Employer",
        value: "ABC Technologies",
      },
      {
        icon: "cash-outline",
        label: "Month",
        value: "August 2026",
      },
    ],
  },

  // Insurance
  {
    id: "doc-007",
    imageUri: "https://.../health-insurance.jpg",
    category: DocumentType.Insurance,
    title: "Health Insurance Policy",
    description: "Health insurance policy document and coverage details.",
    status: DocumentStatus.Ready,
    date: "2026-07-28T14:20:00.000Z",
    fields: [
      {
        icon: "shield-checkmark-outline",
        label: "Provider",
        value: "HDFC ERGO",
      },
      {
        icon: "calendar-outline",
        label: "Valid Until",
        value: "Jul 28, 2027",
      },
    ],
  },
  {
    id: "doc-008",
    imageUri: "https://.../car-insurance.jpg",
    category: DocumentType.Insurance,
    title: "Car Insurance Policy",
    description: "Vehicle insurance policy with coverage information.",
    status: DocumentStatus.Processing,
    date: "2026-07-20T12:10:00.000Z",
    fields: [
      {
        icon: "car-outline",
        label: "Vehicle",
        value: "Hyundai Creta",
      },
      {
        icon: "calendar-outline",
        label: "Expiry",
        value: "Jul 20, 2027",
      },
    ],
  },

  // Legal
  {
    id: "doc-009",
    imageUri: "https://.../rental-agreement.jpg",
    category: DocumentType.Legal,
    title: "Rental Agreement",
    description: "Residential rental agreement containing tenancy terms.",
    status: DocumentStatus.Ready,
    date: "2026-07-15T09:00:00.000Z",
    fields: [
      {
        icon: "home-outline",
        label: "Property",
        value: "Jaipur Residence",
      },
      {
        icon: "calendar-outline",
        label: "Valid Until",
        value: "Jul 15, 2027",
      },
    ],
  },
  {
    id: "doc-010",
    imageUri: "https://.../employment-agreement.jpg",
    category: DocumentType.Legal,
    title: "Employment Agreement",
    description: "Employment agreement containing terms and conditions.",
    status: DocumentStatus.Ready,
    date: "2026-06-28T13:40:00.000Z",
    fields: [
      {
        icon: "briefcase-outline",
        label: "Company",
        value: "ABC Technologies",
      },
      {
        icon: "calendar-outline",
        label: "Signed",
        value: "Jun 28, 2026",
      },
    ],
  },

  // Education
  {
    id: "doc-011",
    imageUri: "https://.../marksheet.jpg",
    category: DocumentType.Education,
    title: "College Marksheet",
    description: "Academic marksheet from your final semester.",
    status: DocumentStatus.Ready,
    date: "2026-06-15T11:30:00.000Z",
    fields: [
      {
        icon: "school-outline",
        label: "Institute",
        value: "ABC University",
      },
      {
        icon: "calendar-outline",
        label: "Year",
        value: "2026",
      },
    ],
  },
  {
    id: "doc-012",
    imageUri: "https://.../certificate.jpg",
    category: DocumentType.Education,
    title: "React Native Certificate",
    description: "Certificate of completion for React Native training.",
    status: DocumentStatus.Ready,
    date: "2026-05-20T16:15:00.000Z",
    fields: [
      {
        icon: "school-outline",
        label: "Course",
        value: "React Native Development",
      },
      {
        icon: "calendar-outline",
        label: "Completed",
        value: "May 20, 2026",
      },
    ],
  },

  // Receipt
  {
    id: "doc-013",
    imageUri: "https://.../grocery-receipt.jpg",
    category: DocumentType.Receipt,
    title: "Grocery Purchase Receipt",
    description: "Receipt from your recent grocery shopping.",
    status: DocumentStatus.Ready,
    date: "2026-08-25T18:30:00.000Z",
    fields: [
      {
        icon: "storefront-outline",
        label: "Store",
        value: "Reliance Fresh",
      },
      {
        icon: "cash-outline",
        label: "Amount",
        value: "₹2,450",
      },
    ],
  },
  {
    id: "doc-014",
    imageUri: "https://.../electronics-receipt.jpg",
    category: DocumentType.Receipt,
    title: "Laptop Purchase Receipt",
    description: "Purchase receipt for your recently bought laptop.",
    status: DocumentStatus.Ready,
    date: "2026-08-10T15:45:00.000Z",
    fields: [
      {
        icon: "storefront-outline",
        label: "Store",
        value: "Croma",
      },
      {
        icon: "cash-outline",
        label: "Amount",
        value: "₹68,999",
      },
    ],
  },

  // Bill
  {
    id: "doc-015",
    imageUri: "https://.../electricity-bill.jpg",
    category: DocumentType.Bill,
    title: "Electricity Bill",
    description: "Monthly electricity bill for your home.",
    status: DocumentStatus.Ready,
    date: "2026-08-20T17:10:00.000Z",
    fields: [
      {
        icon: "flash-outline",
        label: "Provider",
        value: "JVVNL",
      },
      {
        icon: "cash-outline",
        label: "Amount",
        value: "₹1,280",
      },
    ],
  },
  {
    id: "doc-016",
    imageUri: "https://.../mobile-bill.jpg",
    category: DocumentType.Bill,
    title: "Mobile Phone Bill",
    description: "Monthly mobile phone bill and payment details.",
    status: DocumentStatus.Processing,
    date: "2026-08-12T10:25:00.000Z",
    fields: [
      {
        icon: "phone-portrait-outline",
        label: "Provider",
        value: "Jio",
      },
      {
        icon: "cash-outline",
        label: "Amount",
        value: "₹799",
      },
    ],
  },

  // Other
  {
    id: "doc-017",
    imageUri: "https://.../notes.jpg",
    category: DocumentType.Other,
    title: "Important Notes",
    description: "Miscellaneous notes and information saved for later.",
    status: DocumentStatus.Ready,
    date: "2026-07-28T18:15:00.000Z",
    fields: [
      {
        icon: "create-outline",
        label: "Type",
        value: "Personal Notes",
      },
      {
        icon: "calendar-outline",
        label: "Created",
        value: "Jul 28, 2026",
      },
    ],
  },
  {
    id: "doc-018",
    imageUri: "https://.../travel-booking.jpg",
    category: DocumentType.Other,
    title: "Travel Booking Confirmation",
    description: "Flight and hotel booking information for your upcoming trip.",
    status: DocumentStatus.Ready,
    date: "2026-07-10T12:00:00.000Z",
    fields: [
      {
        icon: "airplane-outline",
        label: "Destination",
        value: "Mumbai",
      },
      {
        icon: "calendar-outline",
        label: "Travel Date",
        value: "Sep 10, 2026",
      },
    ],
  },
];
export const Dashboard = () => {
  const { theme } = useTheme();
  const styles = DashboardStyles(theme);
  const navigation = useNavigation<NavigationProp>();

  const [dummyData, setDummyData] = useState(dummyDocs);
  const [search, setSearch] = useState<string>("");
  const [isPicking, setIsPicking] = useState(false);

  useEffect(() => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 👋",
    });
    if (!search) {
      setDummyData(dummyDocs);
    } else {
      findTheDoc();
    }
  }, [search]);

  const findTheDoc = () => {
    let userInput = search.toLowerCase().split(" ");
    let matchedDoc = dummyDocs.filter((doc) => {
      let docName = doc?.title.toLowerCase();
      return userInput.every((word) => docName.includes(word));
    });
    setDummyData(matchedDoc);
  };

  const handleUploadPress = useCallback(async () => {
    if (isPicking) return;

    try {
      setIsPicking(true);
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/*"],
        copyToCacheDirectory: true,
        multiple: false,
      });
      if (result.canceled || !result.assets?.length) {
        return;
      }
      const file = result.assets[0];
      navigateTo(navigation, "UploadDoc", {
        uri: file.uri,
        name: file.name,
        mimeType: file.mimeType,
        size: file.size,
      });
    } catch (error) {
      console.error("Failed to pick document:", error);
    } finally {
      setIsPicking(false);
    }
  }, [isPicking, navigation]);

  return (
    <View style={styles.container}>
      <Header title="KeepDoc" />
      <Search changeText={(e) => setSearch(e)} />

      <View style={styles.allView}>
        <Text style={styles.recentDocText}>Recent Documents</Text>
      </View>

      <FlashList
        data={dummyData}
        renderItem={({ item }) => (
          <DocCard
            docName={item.title}
            docType={item.category}
            date={item.date}
            docStatus={item.status}
            onPress={() =>
              navigateTo(navigation, "DocumentDetails", { document: item })
            }
          />
        )}
        ListEmptyComponent={<EmptyDocuments />}
      />

      <FloatingActionButton onPress={handleUploadPress} loading={isPicking} />
    </View>
  );
};
