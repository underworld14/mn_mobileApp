import React from 'react';
import { Image } from 'react-native';
import { tabIcon } from '../assets';
import { wp, hp } from '../components/responsive';

const BottomTab = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? tabIcon.homeActive : tabIcon.homeInactive;
    } else if (route.name === 'Dashboard') {
      iconName = focused ? tabIcon.dashboardActive : tabIcon.dashboardInactive;
    } else if (route.name === 'Account') {
      iconName = focused ? tabIcon.userActive : tabIcon.userInactive;
    }

    // You can return any component that you like here!
    return <Image source={iconName} style={{ width: wp(7), height: wp(7) }} />;
  },
});

export const tabBarOptions = {
  activeTintColor: '#26C281',
  inactiveTintColor: '#464646',
  style: { height: hp(7) },
  labelStyle: { fontFamily: 'Poppins-Regular' },
};

export default BottomTab;
