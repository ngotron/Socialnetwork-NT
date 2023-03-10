
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import MyTabs from './src/navigations/NavigationButton';
import Navigation from './src/screens/feedpost/header/NavigationBar';
import AdminScreen from './src/screens/InfoScreen.js/AdminScreen';
import Login from './src/screens/InfoScreen.js/Login';
import Test from './src/screens/InfoScreen.js/Test';
import UserScreen from './src/screens/InfoScreen.js/UserScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Test"
        screenOptions={{
          headerShow: false,
        }}>
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="MyTab" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
