import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';

import * as authAct from '../../store/actions/auth';

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authAct.logOut());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account screen</Text>
      <Button title="Log Out" onPress={logOut} />
    </View>
  );
}

export default HomeScreen;
