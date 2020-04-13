import 'react-native-gesture-handler';

import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTab, { tabBarOptions } from './bottomTab';

// public screen
import LoginScreen from './public/login';
import WelcomeScreen from './public/welcome';
import ForgotScreen from './public/forgot';

// protected screen
import HomeScreen from './home';
import DashboardSceeen from './dashboard';
import AccountScreen from './account';

function HomeStackScreen() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator headerMode={false}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function DashboardStackScreen() {
  const DashboardStack = createStackNavigator();
  return (
    <DashboardStack.Navigator headerMode={false}>
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

function App(props) {
  if (!props.auth.isLogin) {
    return (
      <NavigationContainer>
        <PublicStack.Navigator initialRouteName="Welcome" headerMode={false}>
          <PublicStack.Screen name="Welcome" component={WelcomeScreen} />
          <PublicStack.Screen name="Login" component={LoginScreen} />
          <PublicStack.Screen name="Forgot" component={ForgotScreen} />
        </PublicStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={BottomTab} tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
        <Tab.Screen name="Account" component={AccountStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
