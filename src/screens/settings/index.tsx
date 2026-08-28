import { useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Animated,
  Pressable,
  Linking,
} from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import { SettingsStyles } from "./styles";
import { Header } from "../../components/header";
import Ionicons from "@react-native-vector-icons/ionicons";
import { SettingCard } from "../../components/setting-card";

export const Settings = () => {
  const { theme } = useTheme();
  const styles = SettingsStyles(theme);
  // entrance animation
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(12)).current;
  // press animation for the link
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 450,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      useNativeDriver: true,
      speed: 40,
      bounciness: 6,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 40,
      bounciness: 6,
    }).start();
  };

  const openPortfolio = () => {
    Linking.openURL("https://govindmaheshwari.vercel.app/");
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="KeepDoc" />

      <View style={styles.subContainer}>
        <Animated.View
          style={[
            styles.profileCard,
            {
              backgroundColor: theme.colors.surface,
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View
            style={[
              styles.profileAvatar,
              { backgroundColor: theme.colors.primary },
            ]}
          >
            <Text
              style={[
                styles.profileInitials,
                { color: theme.colors.surface, fontFamily: theme.fonts.medium },
              ]}
            >
              GM
            </Text>
          </View>

          <View style={styles.profileTextWrap}>
            <Text
              style={[
                styles.profileName,
                { color: theme.colors.text, fontFamily: theme.fonts.medium },
              ]}
            >
              Govind Kumar Bagla
            </Text>
            <Text
              style={[
                styles.profileRole,
                { color: theme.colors.text, fontFamily: theme.fonts.regular },
              ]}
            >
              React Native Developer
            </Text>
          </View>

          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <Pressable
              onPress={openPortfolio}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              style={[
                styles.portfolioBtn,
                { backgroundColor: theme.colors.primary },
              ]}
            >
              <Text
                style={[
                  styles.portfolioBtnText,
                  {
                    color: theme.colors.surface,
                    fontFamily: theme.fonts.medium,
                  },
                ]}
              >
                Portfolio
              </Text>
              <Ionicons
                name="arrow-forward"
                size={14}
                color={theme.colors.surface}
              />
            </Pressable>
          </Animated.View>
        </Animated.View>

        <Text style={styles.settingCardHeaderText}>App Security</Text>

        <SettingCard
          title="App Lock"
          desc="Require FaceID, TouchID or PIN to open Keepdoc"
          rightIcon="push"
          leftIcon="lock-closed"
          swap
        />

        <Text style={styles.settingCardHeaderText}>Your Privacy</Text>

        <View
          style={[
            styles.privacyCard,
            {
              backgroundColor: theme.colors.primary,
            },
          ]}
        >
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: theme.colors.secondary,
              },
            ]}
          >
            <Ionicons
              name="lock-closed"
              size={22}
              color={theme.colors.surface}
            />
          </View>
          <View style={styles.content}>
            <Text
              style={[
                styles.title,
                {
                  color: theme.colors.surface,
                  fontFamily: theme.fonts.medium,
                },
              ]}
            >
              Everything Stays on Devices
            </Text>
            <Text
              style={[
                styles.description,
                {
                  color: theme.colors.surface,
                  fontFamily: theme.fonts.regular,
                },
              ]}
            >
              Keepdoc is designed around "Digital Solitude". Your documents are
              stored locally and encrypted.
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <SettingCard
            title="Offline Status"
            desc="Local Only - No Data Sent to Cloud"
            rightIcon="checkmark-done"
            leftIcon="cloud-offline"
          />
          <SettingCard
            title="Local AI Processing"
            desc="AI models run directly on your phone hardware."
            rightIcon="checkmark-done"
            leftIcon="hardware-chip"
          />
        </View>
        {/* <Text style={styles.settingCardHeaderText}>{"Data Management"}</Text>

        <SettingCard
          title="App Lock"
          desc="Require FaceID, TouchID or PIN to open Keepdoc"
          rightIcon="push"
          leftIcon="lock-closed"
        /> */}
      </View>
    </ScrollView>
  );
};
