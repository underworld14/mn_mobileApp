import React from 'react';
import { Divider } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function divider() {
  return <Divider style={{ height: hp(2), marginVertical: hp(2) }} />;
}

export default divider;
