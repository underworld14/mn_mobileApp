import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// icons
import {tabIcon} from './src/assets';

import HomeScreen from './src/screens/home';
import DashboardSceeen from './src/screens/dashboard';
import AccountScreen from './src/screens/account';
import LoginScreen from './src/screens/public/login';

import WelcomeScreen from './src/screens/public/welcome';

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
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <WelcomeScreen />;
  }

  return (
    <NavigationContainer>
      {isLogin ? (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? tabIcon.homeActive : tabIcon.homeInactive;
              } else if (route.name === 'Dashboard') {
                iconName = focused
                  ? tabIcon.dashboardActive
                  : tabIcon.dashboardInactive;
              } else if (route.name === 'Account') {
                iconName = focused ? tabIcon.userActive : tabIcon.userInactive;
              }

              // You can return any component that you like here!
              return (
                <Image source={iconName} style={{width: 38, height: 38}} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#26C281',
            inactiveTintColor: '#464646',
            style: {height: 64},
          }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
          <Tab.Screen name="Account" component={AccountStackScreen} />
        </Tab.Navigator>
      ) : (
        <PublicStack.Navigator initialRouteName="Login" headerMode={false}>
          <PublicStack.Screen name="Login" component={LoginScreen} />
        </PublicStack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
