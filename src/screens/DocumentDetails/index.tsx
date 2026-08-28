import { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Share,
  Alert,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import Ionicons from "@react-native-vector-icons/ionicons";
import { useTheme } from "../../theme/ThemeProvider";
import { Header } from "../../components/header";
import { DocumentDetailsStyles } from "./styles";
import type { RootStackParamList } from "../../navigations/types";
import { CATEGORY_STYLES, getDocumentStyle } from "../../constants/document";

type DocumentDetailsRouteProp = RouteProp<
  RootStackParamList,
  "DocumentDetails"
>;

export const DocumentDetails = () => {
  const { theme } = useTheme();
  const styles = DocumentDetailsStyles(theme);
  const navigation = useNavigation();
  const route = useRoute<DocumentDetailsRouteProp>();

  // This is the one line that changes per document — everything below is generic.
  // Comes from wherever your AI extraction step stores its output (route params,
  // a local DB lookup by documentId, etc.)
  const doc = route?.params?.document;

  const { document: categoryStyle } = getDocumentStyle(
    doc?.category,
    doc?.status,
  );

  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleShare = async () => {
    try {
      await Share.share({ message: doc?.title, url: doc?.imageUri });
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  const handleEdit = () => {
    // navigate to edit-document screen, passing doc
  };

  const handleDelete = () => {
    Alert.alert("Delete document?", "This can't be undone.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Header
        title=""
        showBackButton
        onBackPress={() => navigation.goBack()}
        rightActions={[
          // {
          //   icon: "pencil-outline",
          //   onPress: handleEdit,
          //   accessibilityLabel: "Edit document",
          // },
          {
            icon: "trash-outline",
            onPress: handleDelete,
            accessibilityLabel: "Delete document",
          },
        ]}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeIn.duration(400)} style={styles.imageCard}>
          <Pressable onPress={() => setIsImageExpanded((v) => !v)}>
            <Image
              source={{ uri: doc?.imageUri }}
              style={[styles.image, isImageExpanded && styles.imageExpanded]}
              resizeMode="contain"
            />
          </Pressable>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(100).duration(350)}
          style={[
            styles.categoryChip,
            { backgroundColor: categoryStyle.color + "1A" },
          ]}
        >
          <Ionicons
            name={categoryStyle.icon}
            size={14}
            color={categoryStyle.color}
          />
          <Text style={[styles.categoryText, { color: categoryStyle.color }]}>
            {doc?.category}
          </Text>
        </Animated.View>

        <Animated.Text
          entering={FadeInDown.delay(150).duration(350)}
          style={styles.title}
        >
          {doc?.title}
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(200).duration(350)}
          style={styles.description}
        >
          {doc?.description}
        </Animated.Text>

        <View style={styles.divider} />

        {doc?.fields.map((field, index) => (
          <Animated.View
            key={field.label}
            entering={FadeInDown.delay(250 + index * 80).duration(350)}
            style={styles.infoCard}
          >
            <View style={styles.infoLabelRow}>
              <Ionicons name={field.icon} size={18} color={theme.colors.text} />
              <Text style={styles.infoLabel}>{field.label}</Text>
            </View>
            <Text style={styles.infoValue}>{field.value}</Text>
          </Animated.View>
        ))}

        <Animated.View
          entering={FadeInUp.delay(300 + doc?.fields.length * 80).duration(350)}
          style={styles.actions}
        >
          <Pressable
            style={[
              styles.shareButton,
              { backgroundColor: categoryStyle.color },
            ]}
            onPress={handleShare}
          >
            <Ionicons
              name="share-social-outline"
              size={18}
              color={theme.colors.surface}
            />
            <Text style={styles.shareButtonText}>Share</Text>
          </Pressable>
        </Animated.View>
      </ScrollView>
    </View>
  );
};
