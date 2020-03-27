import React from 'react';
import {View, Text, Button, Image} from 'react-native';

import {tabIcon} from '../../assets';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home screen</Text>
      <Image source={tabIcon.userActive} style={{width: 40, height: 40}} />
    </View>
  );
}

export default HomeScreen;
