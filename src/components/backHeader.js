import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { wp } from './responsive';
import Text from './elements/text';

function backHeader({ action, title }) {
  return (
    <View style={styles.backContainer}>
      <TouchableOpacity onPress={action}>
        <Icon name="arrow-left" size={wp(6)} />
      </TouchableOpacity>
      <Text size={14} type="semibold" style={styles.text}>
        {title ? title : 'Kembali'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
});

export default backHeader;
