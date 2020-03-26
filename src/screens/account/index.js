import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Account screen</Text>
      <Button title="Go to Details" />
    </View>
  );
}

export default HomeScreen;
