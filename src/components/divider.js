import React from 'react';
import { Divider } from 'react-native-paper';
import { hp } from './responsive';

function divider() {
  return <Divider style={{ height: hp(2), marginVertical: hp(2) }} />;
}

export default divider;
