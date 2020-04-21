import React from 'react';
import { Divider } from 'react-native-paper';
import { hp } from './responsive';

function divider() {
  return <Divider style={{ height: hp(2), marginVertical: hp(1.5) }} />;
}

export default divider;
