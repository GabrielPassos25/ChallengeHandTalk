import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';
import theme from './src/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false,  animationEnabled: false}}>
          {/* <Stack.Screen name="Login" component={Login}/> */}
          {/* <Stack.Screen name="Home" component={Home}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}