import { View, Text, Pressable } from "react-native";
import { Header } from "../../components/header";
import { Search } from "../../components/search/search";
import { useTheme } from "../../theme/ThemeProvider";
import { DashboardStyles } from "./styles";
import { DocCard } from "../../components/docCard";
import { FlashList } from "@shopify/flash-list";
import { EmptyDocuments } from "../../components/empty-doc-list";
import { useEffect, useState } from "react";
const dummyDocs = [
  {
    id: "doc-001",
    docName: "Blood Test Report",
    docType: "MEDICAL",
    date: "2026-08-27T15:30:00.000Z",
    status: "Ready",
  },
  {
    id: "doc-002",
    docName: "Aadhaar Card",
    docType: "IDENTITY",
    date: "2026-08-26T10:15:00.000Z",
    status: "Ready",
  },
  {
    id: "doc-003",
    docName: "Bank Statement",
    docType: "FINANCIAL",
    date: "2026-08-24T08:45:00.000Z",
    status: "Ready",
  },
  {
    id: "doc-004",
    docName: "Health Insurance Policy",
    docType: "INSURANCE",
    date: "2026-08-22T12:20:00.000Z",
    status: "Ready",
  },
  {
    id: "doc-005",
    docName: "Electricity Bill",
    docType: "BILL",
    date: "2026-08-20T17:10:00.000Z",
    status: "Ready",
  },
  {
    id: "doc-006",
    docName: "Purchase Receipt",
    docType: "RECEIPT",
    date: "2026-08-18T14:35:00.000Z",
    status: "Ready",
  },
  {
    id: "doc-007",
    docName: "Rental Agreement",
    docType: "LEGAL",
    date: "2026-08-15T09:00:00.000Z",
    status: "Ready",
  },
  {
    id: "doc-008",
    docName: "College Marksheet",
    docType: "EDUCATION",
    date: "2026-08-12T11:30:00.000Z",
    status: "Ready",
  },
  {
    id: "doc-009",
    docName: "Salary Slip August 2026",
    docType: "FINANCIAL",
    date: "2026-08-10T07:45:00.000Z",
    status: "Processing",
  },
  {
    id: "doc-010",
    docName: "Passport",
    docType: "IDENTITY",
    date: "2026-08-05T13:25:00.000Z",
    status: "Ready",
  },
  {
    id: "doc-011",
    docName: "Car Insurance Document",
    docType: "INSURANCE",
    date: "2026-08-02T16:40:00.000Z",
    status: "Processing",
  },
  {
    id: "doc-012",
    docName: "Important Notes",
    docType: "OTHER",
    date: "2026-07-28T18:15:00.000Z",
    status: "Ready",
  },
];
export const Dashboard = () => {
  const { theme } = useTheme();
  const styles = DashboardStyles(theme);
  const [dummyData, setDummyData] = useState(dummyDocs);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    if (!search) {
      setDummyData(dummyDocs);
    } else {
      findTheDoc();
    }
  }, [search]);

  const findTheDoc = () => {
    let userInput = search.toLowerCase().split(" ");
    let matchedDoc = dummyDocs.filter((doc) => {
      let docName = doc.docName.toLowerCase();
      return userInput.every((word) => docName.includes(word));
    });
    setDummyData(matchedDoc);
  };
  return (
    <View style={styles.container}>
      <Header title="KeepDoc" />
      <Search
        changeText={(e) => {
          setSearch(e);
        }}
      />

      <View style={styles.allView}>
        <Text style={styles.recentDocText}>Recent Documents</Text>

        {/* <Pressable
          style={styles.viewAllBtn}
          onPress={() => {
            console.log("View all");
          }}
        >
          <Text style={styles.viewAllText}>View all</Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color={theme.colors.primary}
          />
        </Pressable> */}
      </View>

      <FlashList
        data={dummyData}
        renderItem={({ item }) => (
          <DocCard
            docName={item.docName}
            docType={item.docType}
            date={item.date}
            docStatus={item.status}
          />
        )}
        ListEmptyComponent={<EmptyDocuments />}
      />
    </View>
  );
};
