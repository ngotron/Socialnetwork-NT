import {faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Navigation from '../screens/feedpost/header/NavigationBar';
// import Navigation from '../screens/feedpost/header/NavigationBar';

import AdminScreen from '../screens/InfoScreen.js/AdminScreen';
// import Login from '../screens/InfoScreen.js/Login';
import UserScreen from '../screens/InfoScreen.js/UserScreen';
const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarHideOnKeyboard: false,
        // tabBarLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 65,
          borderTopWidth: 2,
          borderTopColor: '#FFBF00',
        },
      }}>
      <Tab.Screen
        name="Navigation"
        component={Navigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faHome}
                size={24}
                resizeMode="contain"
                color={focused ? '#FFBF00' : '#000000'}
                
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faUser}
                size={24}
                resizeMode="contain"
                color={focused ? '#FFBF00' : '#000000'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
