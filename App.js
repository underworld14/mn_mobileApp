import 'react-native-gesture-handler';

import React, {useState} from 'react';
// import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/home';
import DashboardSceeen from './src/screens/dashboard';
import AccountScreen from './src/screens/account';
import LoginScreen from './src/screens/public/login';

function HomeStackScreen() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function DashboardStackScreen() {
  const DashboardStack = createStackNavigator();
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={DashboardSceeen} />
    </DashboardStack.Navigator>
  );
}

function AccountStackScreen() {
  const AccountStack = createStackNavigator();
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Dashboard" component={AccountScreen} />
    </AccountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const PublicStack = createStackNavigator();

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer>
      {isLogin ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
          <Tab.Screen name="Account" component={AccountStackScreen} />
        </Tab.Navigator>
      ) : (
        <PublicStack.Navigator initialRouteName="Login">
          <PublicStack.Screen name="Login" component={LoginScreen} />
        </PublicStack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
