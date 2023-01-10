
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { StyleSheet } from 'react-native';
import MyTabs from './src/navigations/NavigationButton';
import Navigation from './src/screens/feedpost/header/NavigationBar';
import AdminScreen from './src/screens/InfoScreen.js/AdminScreen';
import Auth from './src/screens/InfoScreen.js/Auth';
import Login from './src/screens/InfoScreen.js/pages/LoginScreen';
import Logout from './src/screens/InfoScreen.js/pages/Logout';
import SplashScreen from './src/screens/InfoScreen.js/pages/SplashScreen';
import UserScreen from './src/screens/InfoScreen.js/UserScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShow: false,
        }}>
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyTab" component={MyTabs} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Authentest" component={Authentest} /> */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
