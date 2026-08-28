import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@react-native-vector-icons/ionicons";

import { Dashboard } from "../screens/dashboard";
import { useTheme } from "../theme/ThemeProvider";
import { Pressable } from "react-native";
import { Settings } from "../screens/settings";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopWidth: 0,
          elevation: 0,
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarLabelStyle: {
          fontFamily: theme.fonts.medium,
          fontSize: 12,
        },

        tabBarButton: (props) => (
          <Pressable
            {...(props as React.ComponentProps<typeof Pressable>)}
            android_ripple={{ color: "transparent" }}
          />
        ),

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          switch (route.name) {
            case "Home":
              iconName = focused ? "folder-open" : "folder-outline";
              break;

            case "Setting":
              iconName = focused ? "settings" : "settings-outline";
              break;

            default:
              iconName = "help-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} />

      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
};
