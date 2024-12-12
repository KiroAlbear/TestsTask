import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import LoginScreen from '@/app/screens/LoginScreen';
import TestsScreen from './screens/TestsScreen';
import { NavigationContainer } from '@react-navigation/native';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


const items = [
  {
    title: "Basic Plan",
    subtitle: "Includes standard features",
    price: "$9.99/month",
  },
  {
    title: "Pro Plan",
    subtitle: "Advanced features for professionals",
    price: "$19.99/month",
  },
  {
    title: "Enterprise Plan",
    subtitle: "Customized solutions for businesses",
    price: "Contact us",
  },
  {
    title: "Student Plan",
    subtitle: "Discounted plan for students",
    price: "$4.99/month",
  },
];

const Stack = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>

      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header for LoginScreen
        />

        <Stack.Screen
          name="TestsScreen"
          component={TestsScreen}
          options={{ headerShown: false }} // Hide header for TestsScreen
        // Optional: Provide default parameters
        />



      </Stack.Navigator>
    </ThemeProvider>
  );
}
