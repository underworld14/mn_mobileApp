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
import UpdateProfileScreen from './account/updateProfile';

function TabStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={BottomTab} tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashboardSceeen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const PublicStack = createStackNavigator();
const PrivateStack = createStackNavigator();

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
      <PrivateStack.Navigator initialRouteName="TabScreen" headerMode={false}>
        <PrivateStack.Screen name="TabScreen" component={TabStack} />
        <PrivateStack.Screen name="Update-Profile" component={UpdateProfileScreen} />
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
