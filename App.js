import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import MyTabs from './src/navigations/NavigationButton';
import AddNewPost from './src/screens/feedpost/content/AddNewPost';
import Navigation from './src/screens/feedpost/header/NavigationBar';
import AdminScreen from './src/screens/InfoScreen.js/AdminScreen';
import Auth from './src/screens/InfoScreen.js/Auth';
import LoginScreen from './src/screens/InfoScreen.js/pages/LoginScreen';
import Logout from './src/screens/InfoScreen.js/pages/Logout';
import RegisterScreen from './src/screens/InfoScreen.js/pages/RegisterScreen';
import SplashScreen from './src/screens/InfoScreen.js/pages/SplashScreen';
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Register"
          screenOptions={{
            headerShow: false,
          }}>
          <Stack.Screen name="AddNewPost" component={AddNewPost} />
          <Stack.Screen name="Navigation" component={Navigation} />
          {/* <Stack.Screen name="User" component={UserScreen} /> */}
          <Stack.Screen name="Admin" component={AdminScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="MyTab"
            component={MyTabs}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen name="Authentest" component={Authentest} /> */}
          {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Logout" component={Logout} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
